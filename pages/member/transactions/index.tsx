import Sidebar from '../../../components/organisms/sidebar';
import TransactionContent from '../../../components/organisms/transaction-content';

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar active={'transactions'} />
      <TransactionContent />
    </section>
  );
};

export default Transactions;
