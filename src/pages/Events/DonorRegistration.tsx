import { useState } from 'react';
import ComponentCard from '../../components/common/ComponentCard';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';
import Input from '../../components/form/input/InputField';
import Label from '../../components/form/Label';
import { CalendarDays } from 'lucide-react';
import Radio from '../../components/form/input/Radio';
import Button from '../../components/ui/button/Button';
import { Modal } from '../../components/ui/modal';
import { useModal } from '../../hooks/useModal';

export default function DonorRegistration() {
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

  const handleDonorRegistration = () => {
    openModal();
  };

  return (
    <>
      <PageMeta
        title='Daftar Donor'
        description='This is Donor Registration page'
      />
      <PageBreadcrumb pageTitle='Daftar Donor' />
      <div className='space-y-6'>
        <ComponentCard title='Form Pendaftaran'>
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
            <Button
              onClick={() => handleDonorRegistration()}
              size='sm'
              variant='primary'
            >
              Daftar Donor
            </Button>
          </div>
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
          <div className='space-y-5 sm:space-y-6 mt-8'>
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
