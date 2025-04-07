import PageBreadcrumb from '../components/common/PageBreadCrumb';
import PageMeta from '../components/common/PageMeta';
import ComponentCard from '../components/common/ComponentCard';
import FacilityTable from '../components/tables/FacilityTable';

export default function Facility() {
  return (
    <>
      <PageMeta
        title='Fasilitas Kesehatan'
        description='This is Healthcare Facility page'
      />
      <PageBreadcrumb pageTitle='Fasilitas Kesehatan' />
      <div className='space-y-6'>
        <ComponentCard title='Data Fasilitas Kesehatan'>
          <FacilityTable />
        </ComponentCard>
      </div>
    </>
  );
}
