import NumberFormat from 'react-number-format';

interface Props {
  label: string;
  value: string | number;
  type: 'default' | 'item' | 'price';
  classNames?: string;
  itemName?: string;
}

const Row = (props: Props) => {
  const {label, value, type = 'default', classNames, itemName} = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{' '}
      <span className={`purchase-details ${classNames}`}>
        {type === 'default' && <>{value}</>}

        {type === 'item' && (
          <>
            {value} {itemName}
          </>
        )}

        {type === 'price' && (
          <NumberFormat
            displayType={'text'}
            prefix={'Rp '}
            thousandSeparator={'.'}
            decimalSeparator={','}
            value={value}
          />
        )}
      </span>
    </p>
  );
};

export default Row;
