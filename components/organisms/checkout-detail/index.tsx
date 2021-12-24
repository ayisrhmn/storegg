import React from 'react';
import Row from './row';

const CheckoutDetail = () => {
  const [data, setData] = React.useState({}) as any;

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = () => {
    const dataLocal: any = localStorage.getItem('data-topup');
    const dataItem = JSON.parse(dataLocal);

    setData(dataItem);
  };

  const taxCalculate = data.nominalItem?.price * (10 / 100);
  const grandTotal = data.nominalItem?.price + taxCalculate;

  const purchaseDetail = [
    {
      label: 'Your Game ID',
      value: data.verifyID,
      type: 'default',
    },
    // {
    //   label: 'Order ID',
    //   value: '#GG001',
    //   type: 'default',
    // },
    {
      label: 'Item',
      value: data.nominalItem?.coinQty,
      type: 'item',
      itemName: data.nominalItem?.coinName,
    },
    {
      label: 'Price',
      value: data.nominalItem?.price,
      type: 'price',
    },
    {
      label: 'Tax (10%)',
      value: taxCalculate,
      type: 'price',
    },
    {
      label: 'Total',
      value: grandTotal,
      type: 'price',
    },
  ];

  const paymentInformation = [
    {
      label: 'Your Account Name',
      value: data.bankAccName,
    },
    {
      label: 'Type',
      value: data.paymentItem?.payment?.type,
    },
    {
      label: 'Bank Name',
      value: data.paymentItem?.bank?.bankName,
    },
    {
      label: 'Bank Account Name',
      value: data.paymentItem?.bank?.accName,
    },
    {
      label: 'Bank Number',
      value: data.paymentItem?.bank?.noRek,
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
            itemName={item.type === 'item' ? item.itemName : undefined}
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
