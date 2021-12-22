import Link from 'next/link';
import NominalItem from './nominal-item';
import PaymentItem from './payment-item';

interface Props {
  detail: any;
  payment: any;
}

const TopUpForm = (props: Props) => {
  const {detail, payment} = props;

  return (
    <form action="./checkout.html" method="POST">
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
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {detail?.nominals.map((item: any, i: number) => (
            <NominalItem
              key={i}
              id={item._id}
              coinQty={item.coinQty}
              coinName={item.coinName}
              price={item.price}
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
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link href={'/checkout'}>
          <a
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">
            Continue
          </a>
        </Link>
        {/* <button type="submit"
                                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> */}
      </div>
    </form>
  );
};

export default TopUpForm;
