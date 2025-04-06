import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';

import Badge from '../ui/badge/Badge';
import Button from '../ui/button/Button';
import {
  CalenderIcon,
  HorizontaLDots,
  PencilIcon,
  TimeIcon,
} from '../../icons';
import Input from '../form/input/InputField';
import Label from '../form/Label';
import { Modal } from '../ui/modal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import FileInput from '../form/input/FileInput';
import Select from '../form/Select';

interface Schedule {
  id: number;
  pmi_id: number;
  pmi_name: string; // ditambahkan
  location: string;
  location_image: string; // ditambahkan
  date: string;
  start_time: string;
  end_time: string;
  quota: number;
  status: 'available' | 'full' | 'completed';
  created_at: string;
  updated_at: string;
}

const initialData: Schedule[] = [
  {
    id: 1,
    pmi_id: 101,
    pmi_name: 'PMI Cirebon',
    location: 'Alun-alun Cirebon',
    location_image: '/images/locations/alun-alun-cirebon.jpg',
    date: '2025-04-10',
    start_time: '09:00',
    end_time: '12:00',
    quota: 50,
    status: 'available',
    created_at: '2025-04-01T08:00:00Z',
    updated_at: '2025-04-02T10:00:00Z',
  },
  {
    id: 2,
    pmi_id: 102,
    pmi_name: 'PMI Cirebon',
    location: 'Bank Indonesia, Cirebon',
    location_image: '/images/locations/bank-indonesia-cirebon.jpg',
    date: '2025-04-12',
    start_time: '08:00',
    end_time: '11:00',
    quota: 30,
    status: 'full',
    created_at: '2025-04-02T09:00:00Z',
    updated_at: '2025-04-03T12:00:00Z',
  },
  {
    id: 3,
    pmi_id: 103,
    pmi_name: 'PMI Kuningan',
    location: 'Taman Kota Kuningan',
    location_image: '/images/locations/taman-kota-kuningan.jpg',
    date: '2025-04-15',
    start_time: '10:00',
    end_time: '13:00',
    quota: 40,
    status: 'completed',
    created_at: '2025-03-30T07:00:00Z',
    updated_at: '2025-04-04T15:00:00Z',
  },
];

export default function TableSchedule() {
  const { isOpen, openModal, closeModal } = useModal();
  const [scheduleData, setScheduleData] = useState<Schedule[]>(initialData);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null,
  );

  const handleEditClick = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    openModal();
  };

  const handleInputChange = (field: keyof Schedule, value: string | number) => {
    if (!selectedSchedule) return;
    setSelectedSchedule({ ...selectedSchedule, [field]: value });
  };

  const handleSave = () => {
    if (!selectedSchedule) return;

    setScheduleData((prev) =>
      prev.map((s) => (s.id === selectedSchedule.id ? selectedSchedule : s)),
    );

    closeModal();
  };

  const options = [
    { value: 'available', label: 'Available' },
    { value: 'full', label: 'Full' },
    { value: 'completed', label: 'Completed' },
  ];
  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]'>
      <div className='max-w-full overflow-x-auto'>
        <div className='min-w-[1102px]'>
          <Table>
            <TableHeader className='border-b border-gray-100 dark:border-white/[0.05]'>
              <TableRow>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Foto Lokasi
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Lokasi
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  PMI
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Tanggal
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Waktu
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Kuota
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className='px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400'
                >
                  Aksi
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className='divide-y divide-gray-100 dark:divide-white/[0.05]'>
              {scheduleData.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell className='px-5 py-4 text-start'>
                    <div className='w-16 h-16 rounded-lg overflow-hidden border'>
                      <img
                        src={schedule.location_image}
                        alt={schedule.location}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </TableCell>
                  <TableCell className='px-4 py-4 text-theme-sm text-gray-800 dark:text-white/90'>
                    {schedule.location}
                  </TableCell>
                  <TableCell className='px-4 py-4 text-theme-sm text-gray-700 dark:text-white/80'>
                    {schedule.pmi_name}
                  </TableCell>
                  <TableCell className='px-4 py-4 text-theme-sm text-gray-700 dark:text-white/80'>
                    {schedule.date}
                  </TableCell>
                  <TableCell className='px-4 py-4 text-theme-sm text-gray-700 dark:text-white/80'>
                    {schedule.start_time} - {schedule.end_time}
                  </TableCell>
                  <TableCell className='px-4 py-4 text-theme-sm text-gray-700 dark:text-white/80'>
                    {schedule.quota}
                  </TableCell>
                  <TableCell className='px-4 py-4 uppercase'>
                    <Badge
                      size='sm'
                      color={
                        schedule.status === 'available'
                          ? 'success'
                          : schedule.status === 'full'
                            ? 'warning'
                            : 'error'
                      }
                    >
                      {schedule.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='px-4 py-4 text-center'>
                    <div className='flex justify-center items-center gap-2'>
                      <Button
                        size='xs'
                        variant='outline'
                        startIcon={<HorizontaLDots />}
                      >
                        <span className='hidden'>Detail</span>
                      </Button>
                      <Button
                        onClick={() => handleEditClick(schedule)}
                        size='xs'
                        variant='primary'
                        startIcon={<PencilIcon />}
                      >
                        <span className='hidden'>Edit</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className='max-w-[700px] m-4'>
        {selectedSchedule && (
          <div className='p-6'>
            <h4 className='text-2xl font-semibold mb-4'>Edit Schedule</h4>

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              <div>
                <Label>Foto Lokasi</Label>
                <FileInput />
              </div>

              <div>
                <Label>Lokasi</Label>
                <Input
                  type='text'
                  value={selectedSchedule.location}
                  onChange={(e) =>
                    handleInputChange('location', e.target.value)
                  }
                />
              </div>

              <div>
                <Label>PMI</Label>
                <Input
                  type='text'
                  value={selectedSchedule.pmi_name}
                  onChange={(e) =>
                    handleInputChange('pmi_name', e.target.value)
                  }
                />
              </div>

              <div>
                <Label htmlFor='datePicker'>Tanggal</Label>
                <div className='relative'>
                  <Input
                    type='date'
                    id='datePicker'
                    name='datePicker'
                    value={selectedSchedule.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                  <span className='absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400'>
                    <CalenderIcon />
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor='tm'>Jam Mulai</Label>
                <div className='relative'>
                  <Input
                    type='time'
                    id='tm'
                    name='tm'
                    value={selectedSchedule.start_time}
                    onChange={(e) =>
                      handleInputChange('start_time', e.target.value)
                    }
                  />
                  <span className='absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400'>
                    <TimeIcon />
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor='tm'>Jam Selesai</Label>
                <div className='relative'>
                  <Input
                    type='time'
                    id='tm'
                    name='tm'
                    value={selectedSchedule.end_time}
                    onChange={(e) =>
                      handleInputChange('end_time', e.target.value)
                    }
                  />
                  <span className='absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400'>
                    <TimeIcon />
                  </span>
                </div>
              </div>

              <div>
                <Label>Kuota</Label>
                <Input
                  type='number'
                  value={selectedSchedule.quota}
                  onChange={(e) =>
                    handleInputChange('quota', Number(e.target.value))
                  }
                />
              </div>

              <div>
                <Label>Status</Label>
                <Select
                  options={options}
                  defaultValue={selectedSchedule.status}
                  placeholder='Select status'
                  onChange={handleSelectChange}
                  className='dark:bg-dark-900'
                />
              </div>
            </div>

            <div className='flex justify-end gap-3 mt-6'>
              <Button variant='outline' onClick={closeModal}>
                Batal
              </Button>
              <Button onClick={handleSave}>Simpan Perubahan</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
