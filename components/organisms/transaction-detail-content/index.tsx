import Image from 'next/image';
import Row from './row';

interface Props {
  data: any;
}

const TransactionDetailContent = (props: Props) => {
  const {data} = props;

  const purchaseDetail = [
    {
      label: 'Your Game ID',
      value: data.accountUser,
      type: 'default',
    },
    {
      label: 'Order ID',
      value: `#${data._id}`,
      type: 'default',
    },
    {
      label: 'Item',
      value: `${data.historyVoucherTopUp?.coinQty} ${data.historyVoucherTopUp?.coinName}`,
      type: 'item',
    },
    {
      label: 'Price',
      value: data.historyVoucherTopUp?.price,
      type: 'price',
    },
    {
      label: 'Tax (10%)',
      value: data.tax,
      type: 'price',
    },
    {
      label: 'Total',
      value: data.value,
      type: 'price',
    },
  ];

  const paymentInformation = [
    {
      label: 'Your Account Name',
      value: data.name,
    },
    {
      label: 'Type',
      value: data.historyPayment?.type,
    },
    {
      label: 'Bank Name',
      value: data.historyPayment?.bankName,
    },
    {
      label: 'Bank Account Name',
      value: data.historyPayment?.accName,
    },
    {
      label: 'Bank Number',
      value: data.historyPayment?.noRek,
    },
  ];

  const URL_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{data?._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <Image
                        src={`${URL_IMG}/${data.historyVoucherTopUp?.thumbnail}`}
                        width={200}
                        height={130}
                        className={'img-fluid'}
                        alt={'thumbnail'}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.historyVoucherTopUp?.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {data.historyVoucherTopUp?.category}
                    </p>
                  </div>
                </div>
                <div>
                  {data.status === 'pending' && (
                    <p className="fw-medium text-center label pending m-0 rounded-pill">
                      Pending
                    </p>
                  )}

                  {data.status === 'success' && (
                    <p className="fw-medium text-center label success m-0 rounded-pill">
                      Success
                    </p>
                  )}

                  {data.status === 'failed' && (
                    <p className="fw-medium text-center label failed m-0 rounded-pill">
                      Failed
                    </p>
                  )}
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
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
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                {paymentInformation.map((item: any, i: number) => (
                  <Row
                    key={i}
                    label={item.label}
                    value={item.value}
                    type={'default'}
                  />
                ))}
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button">
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionDetailContent;
