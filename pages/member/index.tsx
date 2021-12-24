import OverviewContent from "../../components/organisms/overview-content";
import Sidebar from "../../components/organisms/sidebar";
import jwt_decode from "jwt-decode";

const Member = () => {
  return (
    <section className="overview overflow-auto">
      <Sidebar active={'overview'} />
      <OverviewContent />
    </section>
  );
};

export default Member;

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
