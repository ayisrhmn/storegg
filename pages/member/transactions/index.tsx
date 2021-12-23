import Sidebar from '../../../components/organisms/sidebar';
import TransactionContent from '../../../components/organisms/transaction-content';
import jwt_decode from 'jwt-decode';

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar active={'transactions'} />
      <TransactionContent />
    </section>
  );
};

export default Transactions;

export const getServerSideProps = async ({req}: any) => {
  const {token} = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: any = jwt_decode(jwtToken);
  const user = payload.player;

  return {
    props: {
      user,
    },
  };
};
