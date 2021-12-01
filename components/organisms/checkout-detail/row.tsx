interface Props {
  label: string;
  value: string | number;
  type: 'default' | 'item' | 'price';
  classNames?: string;
}

const Row = (props: Props) => {
  const {label, value, type = 'default', classNames} = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{' '}
      <span className={`purchase-details ${classNames}`}>
        {type === 'default' && <>{value}</>}

        {type === 'item' && <>{value} Diamonds</>}

        {type === 'price' && <>Rp {value}</>}
      </span>
    </p>
  );
};

export default Row;
