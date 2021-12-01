import Row from './row';

const CheckoutDetail = () => {
  const purchaseDetail = [
    {
      label: 'Your Game ID',
      value: 'masayoshizero',
      type: 'default',
    },
    {
      label: 'Order ID',
      value: '#GG001',
      type: 'default',
    },
    {
      label: 'Item',
      value: 250,
      type: 'item',
    },
    {
      label: 'Price',
      value: 42280500,
      type: 'price',
    },
    {
      label: 'Tax (10%)',
      value: 4228000,
      type: 'price',
    },
    {
      label: 'Total',
      value: 55000600,
      type: 'price',
    },
  ];

  const paymentInformation = [
    {
      label: 'Your Account Name',
      value: 'Masayoshi Angga Zero',
    },
    {
      label: 'Type',
      value: 'Worldwide Transfer',
    },
    {
      label: 'Bank Name',
      value: 'Mandiri',
    },
    {
      label: 'Bank Account Name',
      value: 'PT Store GG Indonesia',
    },
    {
      label: 'Bank Number',
      value: '1800 - 9090 - 2021',
    },
  ];

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        {purchaseDetail.map((item: any, i: number) => (
          <Row
            key={i}
            label={item.label}
            value={item.value}
            type={item.type}
            classNames={item.label === 'Total' ? 'color-palette-4' : ''}
          />
        ))}
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        {paymentInformation.map((item: any, i: number) => (
          <Row key={i} label={item.label} value={item.value} type={'default'} />
        ))}
      </div>
    </>
  );
};

export default CheckoutDetail;
