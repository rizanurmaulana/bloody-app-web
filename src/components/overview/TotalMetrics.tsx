import { CalendarCheck, Hospital } from 'lucide-react';

export default function TotalMetrics() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6'>
      {/* <!-- Metric Item Start --> */}
      <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
        <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800'>
          {/* <GroupIcon className='text-gray-800 size-6 dark:text-white/90' /> */}
          <Hospital
            size={24}
            className='text-gray-600 size-6 dark:text-white/70'
          />
        </div>

        <div className='flex items-end justify-between mt-5'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Fasilitas Kesehatan
            </span>
            <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
              11
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
        <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800'>
          <CalendarCheck
            size={24}
            className='text-gray-600 size-6 dark:text-white/70'
          />
        </div>
        <div className='flex items-end justify-between mt-5'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Event Donor
            </span>
            <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
              52
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
        <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800'>
          <Hospital
            size={24}
            className='text-gray-600 size-6 dark:text-white/70'
          />
        </div>
        <div className='flex items-end justify-between mt-5'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Stok Darah
            </span>
            <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
              1508
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
        <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800'>
          <Hospital
            size={24}
            className='text-gray-600 size-6 dark:text-white/70'
          />
        </div>
        <div className='flex items-end justify-between mt-5'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Pendonor
            </span>
            <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
              871
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
