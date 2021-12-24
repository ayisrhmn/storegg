import React from 'react';

const CheckoutItem = () => {
  const [data, setData] = React.useState({}) as any;

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = () => {
    const dataLocal: any = localStorage.getItem('data-item');
    const dataItem = JSON.parse(dataLocal);

    setData(dataItem);
  };

  const URL_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={`${URL_IMG}/${data.thumbnail}`} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {data.gameName}
        </p>
        <p className="color-palette-2 m-0">Category: {data.category?.name}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
