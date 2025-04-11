import StatisticsChart from '../../components/ecommerce/StatisticsChart';
import RecentOrders from '../../components/ecommerce/RecentOrders';
import DemographicCard from '../../components/ecommerce/DemographicCard';
import PageMeta from '../../components/common/PageMeta';
import TotalMetrics from '../../components/overview/TotalMetrics';
import MonthlyDonorChart from '../../components/overview/MonthlyDonorChart';
import BloodStockChart from '../../components/overview/BloodStockChart';

export default function Overview() {
  return (
    <>
      <PageMeta
        title='Overview'
        description='This is Overview Dashboard page'
      />

      <div className='grid grid-cols-12 gap-4 md:gap-6'>
        <div className='col-span-12 space-y-6'>
          <TotalMetrics />
        </div>
        <div className='col-span-12 space-y-6 xl:col-span-7'>
          <MonthlyDonorChart />
        </div>
        <div className='col-span-12 space-y-6 xl:col-span-5'>
          <BloodStockChart />
        </div>
      </div>
    </>
  );
}
