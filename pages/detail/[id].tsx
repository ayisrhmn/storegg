import React from 'react';
import {useRouter} from 'next/router';
import Footer from '../../components/organisms/footer';
import Navbar from '../../components/organisms/navbar';
import TopUpForm from '../../components/organisms/topup-form';
import TopUpItem from '../../components/organisms/topup-item';
import {getDetailVoucher} from '../../services/player';
import {toast} from 'react-toastify';

const Detail = () => {
  const {query, isReady} = useRouter();
  const [voucherDetail, setVoucherDetail] = React.useState({}) as any;

  React.useEffect(() => {
    if (isReady) {
      getData(query.id);
    }

    return () => {};
  }, [isReady]);

  const getData = async (id: any) => {
    await getDetailVoucher(id).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        setVoucherDetail(res.data);
        localStorage.setItem('data-item', JSON.stringify(res.data.detail));
      }
    });
  };

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem
                type={'desktop'}
                gameName={voucherDetail.detail?.gameName}
                thumbnail={voucherDetail.detail?.thumbnail}
                category={voucherDetail.detail?.category.name}
              />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem
                type={'mobile'}
                gameName={voucherDetail.detail?.gameName}
                thumbnail={voucherDetail.detail?.thumbnail}
                category={voucherDetail.detail?.category?.name}
              />
              <hr />
              <TopUpForm
                detail={voucherDetail.detail}
                payment={voucherDetail.payment}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
