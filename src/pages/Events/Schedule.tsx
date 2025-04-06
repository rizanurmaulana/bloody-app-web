import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import TableSchedule from '../../components/tables/TableSchedule';
import PageMeta from '../../components/common/PageMeta';
import Button from '../../components/ui/button/Button';

export default function Schedule() {
  return (
    <>
      <PageMeta title='Schedule' description='This is Schedule page' />
      <PageBreadcrumb pageTitle='Schedule' />
      <div className='space-y-6'>
        <div
          className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] `}
        >
          {/* Card Header */}
          <div className='px-4 py-4 sm:pl-6 sm:pr-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
                Schedule
              </h3>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Button size='sm' variant='primary'>
                  Add Event +
                </Button>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className='p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6'>
            <div className='space-y-6'>
              <TableSchedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
