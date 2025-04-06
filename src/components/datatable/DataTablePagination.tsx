import Button from '../ui/button/Button';
import { Table } from '@tanstack/react-table';

interface Props {
  table: Table<any>;
  setPageSize: (size: number) => void;
}

export default function DataTablePagination({ table, setPageSize }: Props) {
  return (
    <div className='mt-4 flex items-center justify-between'>
      <div className='space-x-2'>
        <span>Show: </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className='border rounded w-15 px-2 py-1'
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span> entries</span>
      </div>
      <div className='space-x-2'>
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
