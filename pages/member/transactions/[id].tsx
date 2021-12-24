import Sidebar from '../../../components/organisms/sidebar';
import TransactionDetailContent from '../../../components/organisms/transaction-detail-content';
import jwt_decode from 'jwt-decode';
import {getHistoryDetail} from '../../../services/member';

interface Props {
  historyDetail: any;
}

const TransactionDetail = (props: Props) => {
  const {historyDetail} = props;

  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active={'transactions'} />
      <TransactionDetailContent data={historyDetail} />
    </section>
  );
};

export default TransactionDetail;

export const getServerSideProps = async ({req, params}: any) => {
  const {token} = req.cookies;
  const {id} = params

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
  const response = await getHistoryDetail(id, jwtToken);

  return {
    props: {
      user,
      historyDetail: response.data,
    },
  };
};
