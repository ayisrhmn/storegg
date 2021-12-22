import Image from 'next/image';
import NumberFormat from 'react-number-format';

interface Props {
  id: string;
  coinQty: number;
  coinName: string;
  price: number;
}

const NominalItem = (props: Props) => {
  const {id, coinQty, coinName, price} = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={id}>
      <input className="d-none" type="radio" id={id} name="topup" value={id} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{coinQty}</span>
            {coinName}
          </p>
          <Image
            id={'icon-check'}
            src={'/icon/icon-check.svg'}
            width={20}
            height={20}
          />
        </div>
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat
            displayType={'text'}
            prefix={'Rp '}
            thousandSeparator={'.'}
            decimalSeparator={','}
            value={price}
          />
        </p>
      </div>
    </label>
  );
};

export default NominalItem;
