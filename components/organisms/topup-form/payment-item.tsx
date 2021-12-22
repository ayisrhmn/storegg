import Image from "next/image";

interface Props {
  type: string;
  bankID: string;
  bankName: string
}

const PaymentItem = (props: Props) => {
  const {type, bankID, bankName} = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankID}>
      <input
        className="d-none"
        type="radio"
        id={bankID}
        name="paymentMethod"
        value={bankID}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <Image
            id={'icon-check'}
            src={'/icon/icon-check.svg'}
            width={20}
            height={20}
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{bankName}</p>
      </div>
    </label>
  );
};

export default PaymentItem;
