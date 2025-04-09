import PageBreadcrumb from '../components/common/PageBreadCrumb';
import PageMeta from '../components/common/PageMeta';
import FacilityTable from '../components/tables/FacilityTable';
import Button from '../components/ui/button/Button';

export default function Facility() {
  return (
    <>
      <PageMeta
        title='Fasilitas Kesehatan'
        description='This is Healthcare Facility page'
      />
      <PageBreadcrumb pageTitle='Fasilitas Kesehatan' />
      <div className='space-y-6'>
        <div
          className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] `}
        >
          {/* Card Header */}
          <div className='px-4 py-4 sm:pl-6 sm:pr-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <h3 className='text-base font-medium text-gray-800 dark:text-white/90'>
                Data Fasilitas Kesehatan
              </h3>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Button size='sm' variant='primary'>
                  Tambah Faskes
                </Button>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className='p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6'>
            <div className='space-y-6'>
              <FacilityTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
