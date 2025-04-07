import PageBreadcrumb from '../components/common/PageBreadCrumb';
import PageMeta from '../components/common/PageMeta';
import ComponentCard from '../components/common/ComponentCard';
import UserTable from '../components/tables/UserTable';

export default function User() {
  return (
    <>
      <PageMeta title='User' description='This is User page' />
      <PageBreadcrumb pageTitle='User' />
      <div className='space-y-6'>
        <ComponentCard title='Data User'>
          <UserTable />
        </ComponentCard>
      </div>
    </>
  );
}
