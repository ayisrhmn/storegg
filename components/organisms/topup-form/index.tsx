import React from 'react';
import NominalItem from './nominal-item';
import PaymentItem from './payment-item';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router';

interface Props {
  nominals: any;
  payment: any;
}

const TopUpForm = (props: Props) => {
  const {nominals, payment} = props;

  const [verifyID, setVerifyID] = React.useState('');
  const [bankAccName, setBankAccName] = React.useState('');
  const [nominalItem, setNominalItem] = React.useState({}) as any;
  const [paymentItem, setPaymentItem] = React.useState({}) as any;

  const router = useRouter();

  const onNominalChange = (item: any) => {
    setNominalItem(item);
  };

  const onPaymentChange = (payment: any, bank: any) => {
    const data = {
      payment,
      bank,
    };

    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === '' ||
      bankAccName === '' ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      toast.error('All data must be filled!');
    } else {
      const data = {
        verifyID,
        bankAccName,
        nominalItem,
        paymentItem,
      };

      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/checkout');
    }
  };

  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(val) => setVerifyID(val.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals?.map((item: any, i: number) => (
            <NominalItem
              key={i}
              id={item._id}
              coinQty={item.coinQty}
              coinName={item.coinName}
              price={item.price}
              onChange={() => onNominalChange(item)}
            />
          ))}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payment?.map((pay: any) => {
              return pay?.banks?.map((bank: any, i: number) => (
                <PaymentItem
                  key={i}
                  type={pay.type}
                  bankID={bank._id}
                  bankName={bank.bankName}
                  onChange={() => onPaymentChange(pay, bank)}
                />
              ));
            })}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccName}
          onChange={(val) => setBankAccName(val.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}>
          Continue
        </button>
      </div>
    </>
  );
};

export default TopUpForm;
