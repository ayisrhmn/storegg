import OverviewContent from "../../components/organisms/overview-content";
import Sidebar from "../../components/organisms/sidebar";

const Member = () => {
  return (
    <section className="overview overflow-auto">
      <Sidebar active={'overview'} />
      <OverviewContent />
    </section>
  );
};

export default Member;
