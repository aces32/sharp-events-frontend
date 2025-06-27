import FinancialHeader from 'components/molecules/m-financialHeader';
import StatementTable from 'components/molecules/m-statementTable';
import TransactionTable from 'components/molecules/m-transactionTable';

const Financials = () => {
  return (
    <div>
      <FinancialHeader />
      <TransactionTable />
      <StatementTable />
    </div>
  );
};

export default Financials;
