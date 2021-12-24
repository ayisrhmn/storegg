import React from 'react';
import Footer from '../../components/organisms/footer';
import Navbar from '../../components/organisms/navbar';
import TopUpForm from '../../components/organisms/topup-form';
import TopUpItem from '../../components/organisms/topup-item';
import {getDetailVoucher, getFeaturedGame} from '../../services/player';

interface Props {
  dataItem: any;
  nominals: any;
  payments: any;
}

const Detail = (props: Props) => {
  const {dataItem, nominals, payments} = props;

  React.useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem));

    return () => {};
  }, []);

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
                gameName={dataItem.gameName}
                thumbnail={dataItem.thumbnail}
                category={dataItem.category.name}
              />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem
                type={'mobile'}
                gameName={dataItem.gameName}
                thumbnail={dataItem.thumbnail}
                category={dataItem.category?.name}
              />
              <hr />
              <TopUpForm
                nominals={nominals}
                payment={payments}
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

export const getStaticPaths = async () => {
  const data = await getFeaturedGame();

  const paths = data.data?.map((item: any) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}: any) => {
  const {id} = params;
  const data = await getDetailVoucher(id);

  return {
    props: {
      dataItem: data.data?.detail,
      nominals: data.data?.detail?.nominals,
      payments: data.data?.payment,
    },
  };
};
