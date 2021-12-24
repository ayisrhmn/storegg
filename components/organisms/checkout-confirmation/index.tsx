import {useRouter} from 'next/router';
import React from 'react';
import {toast} from 'react-toastify';
import {setCheckout} from '../../../services/player';

const CheckoutConfirmation = () => {
  const [checkbox, setCheckbox] = React.useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal: any = localStorage.getItem('data-item');
    const dataTopUpLocal: any = localStorage.getItem('data-topup');

    const dataItem = JSON.parse(dataItemLocal);
    const dataTopUp = JSON.parse(dataTopUpLocal);

    if (!checkbox) {
      toast.error('Make sure you have made the payment');
    } else {
      const data = {
        voucher: dataItem._id,
        nominal: dataTopUp.nominalItem?._id,
        payment: dataTopUp.paymentItem?.payment?._id,
        bank: dataTopUp.paymentItem?.bank?._id,
        name: dataTopUp.bankAccName,
        accountUser: dataTopUp.verifyID,
      };

      await setCheckout(data).then((res) => {
        if (res.error) {
          toast.error(res.message);
        } else {
          toast.success('Checkout Successfull!');
          router.push('/complete-checkout');
          localStorage.removeItem('data-item');
          localStorage.removeItem('data-topup');
        }
      });
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}>
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
