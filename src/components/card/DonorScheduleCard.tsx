import { CalendarClock, MapPin, UsersRound } from 'lucide-react';
import Badge from '../ui/badge/Badge';

type DonorSchedule = {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  imageUrl: string;
  facility: {
    name: string;
    logo: string;
  };
  status: string;
  registered: number;
  quota: number;
};

type DonorScheduleCardProps = {
  data: DonorSchedule[];
};

export default function DonorScheduleCardList({
  data,
}: DonorScheduleCardProps) {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
      {data.map((schedule) => {
        const percentage = Math.round(
          (schedule.registered / schedule.quota) * 100,
        );
        const isFull = schedule.registered >= schedule.quota;

        return (
          <div key={schedule.id}>
            <div className='rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden'>
              <div className='relative aspect-video'>
                <img
                  src={schedule.imageUrl}
                  alt={schedule.title}
                  className='object-cover w-full h-full'
                />
                <span className='absolute top-3 left-3'>
                  <Badge variant='light' color={isFull ? 'primary' : 'success'}>
                    {isFull ? 'Full' : schedule.status}
                  </Badge>
                </span>
                <div className='absolute bottom-0 left-0 py-2 px-4 bg-white dark:bg-gray-800 rounded-tr-3xl flex items-center gap-3'>
                  <div className='w-5 h-5 overflow-hidden rounded-full'>
                    <img
                      src={schedule.facility.logo}
                      alt={schedule.facility.name}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <p className='block font-medium text-gray-800 dark:text-white text-theme-sm'>
                    {schedule.facility.name}
                  </p>
                </div>
              </div>

              <div className='relative p-4'>
                <div className='absolute left-0 bottom-0 w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden'>
                  <div
                    className='h-full bg-success-500 text-white text-[10px] font-medium flex items-center justify-center'
                    style={{ width: `${percentage}%` }}
                  >
                    {percentage}%
                  </div>
                </div>
                <h4 className='mb-1 text-theme-xl font-medium text-gray-800 dark:text-white/90'>
                  {schedule.title}
                </h4>
                <p className='flex items-center gap-3 text-gray-500 dark:text-gray-400 mb-1'>
                  <MapPin size={16} /> {schedule.location}
                </p>
                <p className='flex items-center gap-3 text-gray-500 dark:text-gray-400 mb-1'>
                  <CalendarClock size={16} /> {schedule.date}, {schedule.time}
                </p>
                <div className='flex justify-between items-center my-4'>
                  <a
                    href={`schedule/${schedule.id}`}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white shadow-theme-xs ${
                      isFull
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-brand-500 hover:bg-brand-600'
                    }`}
                  >
                    {isFull ? 'Penuh' : 'Daftar Donor'}
                  </a>
                  <p className='flex items-center gap-3 text-base text-gray-500 dark:text-gray-400'>
                    <UsersRound size={16} /> {schedule.registered}/
                    {schedule.quota}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
