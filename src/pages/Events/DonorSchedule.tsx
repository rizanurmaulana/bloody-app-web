import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';
import ComponentCard from '../../components/common/ComponentCard';
import DonorScheduleCardList from '../../components/card/DonorScheduleCard';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/ui/modal';
import Label from '../../components/form/Label';
import Input from '../../components/form/input/InputField';
import { CalendarDays } from 'lucide-react';
import Radio from '../../components/form/input/Radio';

const donorSchedules = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
  const [selectedGender, setSelectedGender] = useState<string>();

  const handleRadioGender = (value: string) => {
    setSelectedGender(value);
  };

  const [selectedBloodType, setSelectedBloodType] = useState<string>();

  const handleRadioBloodType = (value: string) => {
    setSelectedBloodType(value);
  };

  const [selectedRhesus, setSelectedRhesus] = useState<string>();

  const handleRadioRhesus = (value: string) => {
    setSelectedRhesus(value);
  };

  const { isOpen, openModal, closeModal } = useModal();

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

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className='max-w-[700px] p-6 lg:p-10'
      >
        <div className='flex flex-col px-2 overflow-y-auto custom-scrollbar'>
          <div>
            <h5 className='mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl'>
              Daftar Donor
            </h5>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Plan your next big moment: schedule or edit an event to stay on
              track
            </p>
          </div>
          <div className='space-y-5 sm:space-y-6'>
            <div>
              <Label htmlFor='fullname'>Nama Lengkap</Label>
              <Input type='text' id='fullname' name='fullname' />
            </div>
            <div>
              <Label htmlFor='city'>Tempat Lahir</Label>
              <Input type='text' id='city' name='city' />
            </div>
            <div>
              <Label htmlFor='birtdate'>Tanggal Lahir</Label>
              <div className='relative'>
                <Input
                  type='date'
                  id='birtdate'
                  name='birtdate'
                  onChange={(e) => console.log(e.target.value)}
                />
                <span className='absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-500'>
                  <CalendarDays />
                </span>
              </div>
            </div>
            <div>
              <Label htmlFor='gender'>Jenis Kelamin</Label>
              <div className='flex flex-wrap items-center gap-8'>
                <Radio
                  id='laki-laki'
                  name='gender'
                  value='laki-laki'
                  checked={selectedGender === 'laki-laki'}
                  onChange={handleRadioGender}
                  label='Laki-laki'
                />
                <Radio
                  id='perempuan'
                  name='gender'
                  value='perempuan'
                  checked={selectedGender === 'perempuan'}
                  onChange={handleRadioGender}
                  label='Perempuan'
                />
              </div>
            </div>
            <div>
              <Label htmlFor='bloodType'>Golongan Darah</Label>
              <div className='flex flex-wrap items-center gap-8'>
                <Radio
                  id='a'
                  name='bloodType'
                  value='a'
                  checked={selectedBloodType === 'a'}
                  onChange={handleRadioBloodType}
                  label='A'
                />
                <Radio
                  id='b'
                  name='bloodType'
                  value='b'
                  checked={selectedBloodType === 'b'}
                  onChange={handleRadioBloodType}
                  label='B'
                />
                <Radio
                  id='ab'
                  name='bloodType'
                  value='ab'
                  checked={selectedBloodType === 'ab'}
                  onChange={handleRadioBloodType}
                  label='AB'
                />
                <Radio
                  id='o'
                  name='bloodType'
                  value='o'
                  checked={selectedBloodType === 'o'}
                  onChange={handleRadioBloodType}
                  label='O'
                />
              </div>
            </div>
            <div>
              <Label htmlFor='rhesus'>Rhesus</Label>
              <div className='flex flex-wrap items-center gap-8'>
                <Radio
                  id='+'
                  name='rhesus'
                  value='+'
                  checked={selectedRhesus === '+'}
                  onChange={handleRadioRhesus}
                  label='+'
                />
                <Radio
                  id='-'
                  name='rhesus'
                  value='-'
                  checked={selectedRhesus === '-'}
                  onChange={handleRadioRhesus}
                  label='-'
                />
              </div>
            </div>
            <div>
              <Label htmlFor='weight'>Berat Badan</Label>
              <Input
                type='number'
                id='weight'
                name='weight'
                placeholder='Minimal 45kg'
              />
            </div>
          </div>
          <div className='flex items-center gap-3 mt-6 modal-footer sm:justify-end'>
            <button
              onClick={closeModal}
              type='button'
              className='flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto'
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto'
            >
              Daftar Donor
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
