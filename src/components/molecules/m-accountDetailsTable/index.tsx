import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface DataProps {
  id: string;

  date: string;
  type: string;
  period: string;
  earning: string;
  transactions?: {
    date: string;
    description: string;
    debit: number;
    credit: number;
    balance: number;
  }[];
}
interface FlattenedRow {
  id: string;
  type: string;
  period: string;
  earning: string;
  issueDate: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

const data: DataProps[] = [
  {
    id: '001',
    type: 'Monthly Statement',
    period: 'May 2025',
    date: '2025-06-01',
    earning: 'NGN 150,000',
    transactions: [
      {
        date: '2025-05-01',
        description: 'Opening Balance',
        debit: 0,
        credit: 0,
        balance: 0,
      },
      {
        date: '2025-05-03',
        description: 'Payment Received',
        debit: 0,
        credit: 120000,
        balance: 120000,
      },
      {
        date: '2025-05-10',
        description: 'Service Fee',
        debit: 10000,
        credit: 0,
        balance: 110000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 60000,
      },
      {
        date: '2025-05-31',
        description: 'Closing Balance',
        debit: 0,
        credit: 0,
        balance: 60000,
      },
    ],
  },
  {
    id: '002',
    type: 'Monthly Statement',
    period: 'April 2025',

    date: '2025-05-01',
    earning: 'NGN 130,000',
    transactions: [
      {
        date: '2025-05-01',
        description: 'Opening Balance',
        debit: 0,
        credit: 0,
        balance: 0,
      },
      {
        date: '2025-05-05',
        description: 'Deposit',
        debit: 0,
        credit: 150000,
        balance: 150000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 100000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 60000,
      },
      {
        date: '2025-05-31',
        description: 'Closing Balance',
        debit: 0,
        credit: 0,
        balance: 60000,
      },
    ],
  },
  {
    id: '003',
    type: 'Quarterly Statement',
    period: 'Q1 2025 (Jan-Mar)',
    date: '2025-04-01',
    earning: 'NGN 400,000',
    transactions: [
      {
        date: '2025-05-01',
        description: 'Opening Balance',
        debit: 0,
        credit: 0,
        balance: 0,
      },
      {
        date: '2025-05-03',
        description: 'Payment Received',
        debit: 0,
        credit: 120000,
        balance: 120000,
      },
      {
        date: '2025-05-10',
        description: 'Service Fee',
        debit: 10000,
        credit: 0,
        balance: 110000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 60000,
      },
      {
        date: '2025-05-31',
        description: 'Closing Balance',
        debit: 0,
        credit: 0,
        balance: 60000,
      },
    ],
  },
  {
    id: '004',
    type: 'Monthly Statement',
    period: 'May 2025',
    date: '2025-06-01',
    earning: 'NGN 150,000',
    transactions: [
      {
        date: '2025-05-01',
        description: 'Opening Balance',
        debit: 0,
        credit: 0,
        balance: 0,
      },
      {
        date: '2025-05-03',
        description: 'Payment Received',
        debit: 0,
        credit: 120000,
        balance: 120000,
      },
      {
        date: '2025-05-10',
        description: 'Service Fee',
        debit: 10000,
        credit: 0,
        balance: 110000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 60000,
      },
      {
        date: '2025-05-31',
        description: 'Closing Balance',
        debit: 0,
        credit: 0,
        balance: 60000,
      },
    ],
  },
  {
    id: '005',
    type: 'Annual Summary',
    period: '2024',
    date: '2025-06-01',
    earning: ' NGN 1,500,000',
    transactions: [
      {
        date: '2025-05-01',
        description: 'Opening Balance',
        debit: 0,
        credit: 0,
        balance: 0,
      },
      {
        date: '2025-05-03',
        description: 'Payment Received',
        debit: 0,
        credit: 120000,
        balance: 120000,
      },
      {
        date: '2025-05-10',
        description: 'Service Fee',
        debit: 10000,
        credit: 0,
        balance: 110000,
      },
      {
        date: '2025-05-20',
        description: 'Withdrawal',
        debit: 50000,
        credit: 0,
        balance: 60000,
      },
      {
        date: '2025-05-31',
        description: 'Closing Balance',
        debit: 0,
        credit: 0,
        balance: 60000,
      },
    ],
  },
];

const columnHelper = createColumnHelper<FlattenedRow>();
const columns = [
  columnHelper.accessor('date', {
    header: 'Date',
  }),
  columnHelper.accessor('description', {
    header: 'Description',
  }),
  columnHelper.accessor('debit', {
    header: 'Withdrawal/ Debit',
  }),
  columnHelper.accessor('credit', {
    header: 'Deposit/ Credit',
  }),
  columnHelper.accessor('balance', {
    header: 'Balance',
  }),
];
const AccountDetailsTable = ({ id }: { id?: string }) => {
  const flattenedData = data
    .filter((item) => item.id === id && item.transactions?.length)
    .flatMap((item) =>
      item.transactions!.map((transaction) => ({
        ...transaction,
        id: item.id,
        type: item.type,
        period: item.period,
        earning: item.earning,
        issueDate: item.date,
      })),
    );

  const table = useReactTable({
    data: flattenedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full rounded-lg bg-white px-3 py-9 lg:px-6">
      <div className="overflow-x-scroll">
        <table className="min-w-full border-collapse ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="rounded">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-[#0166FF] px-4 py-2 text-left font-Rubik text-sm font-bold text-white"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-left">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-b border-[#00000033] px-4 py-2 font-Rubik text-sm font-medium text-[#000000CC]"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-10 py-3 text-right font-Rubik text-sm font-bold">
        <p>Balance Due</p>
        <p>NGN 11,949,00</p>
      </div>
      <hr />
    </div>
  );
};

export default AccountDetailsTable;
