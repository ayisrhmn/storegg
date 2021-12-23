import {ReactNode} from 'react';
import Image from 'next/image';
import NumberFormat from 'react-number-format';

interface Props {
  icon: string;
  children: ReactNode;
  total: number;
}

const Category = (props: Props) => {
  const {icon, children, total} = props;

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={icon} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <NumberFormat
            displayType={'text'}
            prefix={'Rp '}
            thousandSeparator={'.'}
            decimalSeparator={','}
            value={total}
            className={'text-2xl color-palette-1 fw-medium m-0'}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
