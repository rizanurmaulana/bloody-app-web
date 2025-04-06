import Button from '../ui/button/Button';
import { Table } from '@tanstack/react-table';

interface Props {
  table: Table<any>;
}

export default function DataTablePagination({ table }: Props) {
  return (
    <div className='mt-4 flex items-center justify-between'>
      <div className='space-x-2 dark:text-white'>
        <span>Show: </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className='border border-gray-200 dark:border-gray-800 rounded-lg w-16 px-2 py-1 dark:bg-gray-900 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:focus:border-brand-800'
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span> entries</span>
      </div>
      <div className='space-x-2 dark:text-white'>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          size='xs'
          variant='outline'
        >
          Prev
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          size='xs'
          variant='outline'
        >
          Next
        </Button>
      </div>
    </div>
  );
}
