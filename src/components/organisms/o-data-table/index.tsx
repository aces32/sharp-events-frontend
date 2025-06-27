import DataTable, { TableProps } from 'react-data-table-component';
import MDCCheckbox from '@material-ui/core/Checkbox';
import { MdArrowDropDown } from 'react-icons/md';
import { ReactNode } from 'react';

const sortIcon = <MdArrowDropDown />;
const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRowsComponent={MDCCheckbox as unknown as ReactNode}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
}

export default DataTableBase;
