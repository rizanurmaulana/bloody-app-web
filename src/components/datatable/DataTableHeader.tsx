import { Table } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui/table';

export default function DataTableHeader({ table }: { table: Table<any> }) {
  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              isHeader
              className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
            >
              {header.isPlaceholder
                ? null
                : header.column.columnDef.header &&
                    header.column.columnDef.header instanceof Function
                  ? header.column.columnDef.header(header.getContext())
                  : header.column.columnDef.header}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
