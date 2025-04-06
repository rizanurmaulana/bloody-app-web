import { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui/table';

export default function DataTableBody({ table }: { table: Table<any> }) {
  return (
    <>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          className='divide-y divide-gray-100 dark:divide-white/[0.05]'
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              className='px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400'
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
