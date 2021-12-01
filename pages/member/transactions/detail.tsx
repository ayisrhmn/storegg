import Sidebar from '../../../components/organisms/sidebar';
import TransactionDetailContent from '../../../components/organisms/transaction-detail-content';

const TransactionDetail = () => {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active={'transactions'} />
      <TransactionDetailContent />
    </section>
  );
};

export default TransactionDetail;
