import Input from '../form/input/InputField';
import Button from '../ui/button/Button';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTablePagination from './DataTablePagination';

import { useState } from 'react';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  exportCSV?: () => void;
  placeholder?: string;
}

export default function DataTable<T>({
  data,
  columns,
  exportCSV,
  placeholder = 'Cari...',
}: DataTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pageSize, setPageSize] = useState(5);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      {/* Search and Export */}
      <div className='flex items-center justify-between mb-4'>
        <Input
          type='text'
          placeholder={placeholder}
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <Button
          onClick={exportCSV}
          size='sm'
          variant='outline'
          disabled={!exportCSV}
        >
          Export CSV
        </Button>
      </div>

      {/* Table */}
      <div className='overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]'>
        <div className='max-w-full overflow-x-auto'>
          <div className='min-w-[1102px]'>
            <table className='w-full'>
              <thead>
                <DataTableHeader table={table} />
              </thead>
              <tbody>
                <DataTableBody table={table} />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} setPageSize={setPageSize} />
    </div>
  );
}
