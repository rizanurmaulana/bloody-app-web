import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';
import ComponentCard from '../../components/common/ComponentCard';
import DonorScheduleCardList from '../../components/card/DonorScheduleCard';

const donorSchedules = [
  {
    id: '1',
    title: 'Donor Darah Kita',
    location: 'Bank Indonesia Cirebon',
    date: '27 Juni 2024',
    time: '09:00 - 12:00',
    imageUrl: '/images/image-16_9.png',
    facility: {
      name: 'PMI Cirebon',
      logo: '/images/facility/pmi.png',
    },
    status: 'Available',
    registered: 28,
    quota: 30,
  },
  {
    id: '2',
    title: 'Aksi Sehat Ramadan',
    location: 'Alun-Alun Kuningan',
    date: '15 April 2024',
    time: '08:00 - 11:00',
    imageUrl: '/images/image-16_9.png',
    facility: {
      name: 'PMI Kuningan',
      logo: '/images/facility/pmi.png',
    },
    status: 'Available',
    registered: 15,
    quota: 30,
  },
  {
    id: '3',
    title: 'Donor Bersama Komunitas',
    location: 'RSUD Indramayu',
    date: '10 Mei 2024',
    time: '13:00 - 16:00',
    imageUrl: '/images/image-16_9.png',
    facility: {
      name: 'PMI Indramayu',
      logo: '/images/facility/pmi.png',
    },
    status: 'Available',
    registered: 30,
    quota: 30,
  },
  {
    id: '4',
    title: 'Donor Cinta Kasih',
    location: 'Stasiun Majalengka',
    date: '1 Juni 2024',
    time: '10:00 - 13:00',
    imageUrl: '/images/image-16_9.png',
    facility: {
      name: 'PMI Majalengka',
      logo: '/images/facility/pmi.png',
    },
    status: 'Available',
    registered: 20,
    quota: 25,
  },
  {
    id: '5',
    title: 'Donor Rutin Bulanan',
    location: 'Kantor Camat Cirebon Utara',
    date: '22 Juni 2024',
    time: '08:30 - 11:30',
    imageUrl: '/images/image-16_9.png',
    facility: {
      name: 'PMI Cirebon',
      logo: '/images/facility/pmi.png',
    },
    status: 'Available',
    registered: 18,
    quota: 30,
  },
];

export default function DonorSchedule() {
  return (
    <>
      <PageMeta
        title='Jadwal Donor'
        description='This is Donor Schedule page'
      />
      <PageBreadcrumb pageTitle='Jadwal Donor' />
      <div className='space-y-6'>
        <ComponentCard title='Jadwal Donor'>
          <DonorScheduleCardList data={donorSchedules} />
        </ComponentCard>
      </div>
    </>
  );
}
