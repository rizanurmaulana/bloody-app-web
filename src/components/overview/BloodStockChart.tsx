import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export default function BloodStockChart() {
  const series = [452, 452, 151, 453];
  const options: ApexOptions = {
    colors: ['#E53935'],
    chart: {
      fontFamily: 'Outfit, sans-serif',
      type: 'donut',
      height: 180,
      toolbar: {
        show: false,
      },
    },
    labels: ['A', 'B', 'AB', 'O'],
    theme: {
      monochrome: {
        enabled: true,
        color: '#E53935',
        shadeTo: 'light',
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#ffffff'], // label di dalam chart
      },
    },
    legend: {
      labels: {
        colors: ['#ffffff'], // label legend
      },
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Outfit, sans-serif',
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '20px',
              fontWeight: '700',
            },
            value: {
              fontWeight: '500',
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
            Stok Darah
          </h3>
          <p className='mt-1 text-gray-500 text-theme-sm dark:text-gray-400'>
            Persentase stok darah berdasarkan golongan
          </p>
        </div>
      </div>
      <div className='relative max-h-[330px]'>
        <Chart options={options} series={series} type='donut' height={300} />
      </div>
    </div>
  );
}
