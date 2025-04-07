import { useMemo, useState } from 'react';
import DataTable from '../datatable/DataTable';
import Button from '../ui/button/Button';
import Badge from '../ui/badge/Badge';
import { Modal } from '../ui/modal';
import { useModal } from '../../hooks/useModal';

interface Facility {
  id: number;
  image: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const data = [
  {
    id: 1,
    image: '/images/facility/pmi.png',
    name: 'PMI Kuningan',
    type: 'Palang Merah',
    email: 'info@pmikuningan.or.id',
    phone: '0231-123456',
    address: 'Jl. Kuningan-Cirebon No.56, Kuningan',
    status: 'active',
    createdAt: '2025-03-01T08:00:00Z',
    updatedAt: '2025-04-05T12:00:00Z',
  },
  {
    id: 2,
    image: '/images/facility/logo-faskes.png',
    name: 'RSUD 45 Kuningan',
    type: 'Rumah Sakit',
    email: 'rsud45@kuningankab.go.id',
    phone: '0232-876543',
    address: 'Jl. Aruji Kartawinata No.45, Kuningan',
    status: 'active',
    createdAt: '2024-11-12T09:30:00Z',
    updatedAt: '2025-03-28T15:45:00Z',
  },
  {
    id: 3,
    image: '/images/facility/logo-faskes.png',
    name: 'Klinik Sehat Medika',
    type: 'Klinik',
    email: 'kontak@sehatmedika.co.id',
    phone: '0821-2345-6789',
    address: 'Jl. Raya Cigugur No.21, Kuningan',
    status: 'inactive',
    createdAt: '2023-07-22T10:15:00Z',
    updatedAt: '2025-01-10T11:00:00Z',
  },
  {
    id: 4,
    image: '/images/facility/logo-faskes.png',
    name: 'Puskesmas Cilimus',
    type: 'Puskesmas',
    email: 'puskesmas.cilimus@kuningan.go.id',
    phone: '0232-334455',
    address: 'Jl. Raya Cilimus No.12, Kuningan',
    status: 'active',
    createdAt: '2022-05-03T07:00:00Z',
    updatedAt: '2025-03-30T14:30:00Z',
  },
];

export default function FacilityTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'No.',
        cell: (info: any) => info.row.index + 1,
      },
      {
        accessorKey: 'name',
        header: 'Profile',
        cell: (info: any) => {
          const { image, name, type } = info.row.original;
          return (
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 overflow-hidden rounded-full'>
                <img
                  src={image}
                  alt={name}
                  className='object-cover w-full h-full'
                />
              </div>
              <div>
                <span className='block font-medium text-gray-800 text-theme-sm dark:text-white/90'>
                  {name}
                </span>
                <span className='block text-gray-500 text-theme-xs dark:text-gray-400'>
                  {type}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone',
        header: 'No. Handphone',
      },
      {
        accessorKey: 'address',
        header: 'Alamat',
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: (info: any) => {
          const { status } = info.row.original;
          return (
            <Badge
              size='sm'
              color={
                status === 'active'
                  ? 'success'
                  : status === 'inactive'
                    ? 'warning'
                    : 'error'
              }
            >
              <span className='capitalize'>{status}</span>
            </Badge>
          );
        },
      },
      {
        header: 'Action',
        cell: (info: any) => {
          const { id } = info.row.original;
          return (
            <Button
              size='xs'
              variant='outline'
              onClick={() => handleOpenDetail(id)}
            >
              Detail
            </Button>
          );
        },
      },
    ],
    [],
  );

  const { isOpen, openModal, closeModal } = useModal();
  const [selectedUser, setSelectedUser] = useState<Facility | null>(null);

  const handleOpenDetail = (id: number) => {
    const user = data.find((user) => user.id === id);
    if (user) {
      setSelectedUser(user);
      openModal();
    }
  };

  return (
    <>
      <DataTable<Facility>
        tableName='Healthcare Facility List'
        data={data}
        columns={columns}
        placeholder='Search...'
      />

      <Modal isOpen={isOpen} onClose={closeModal} className='max-w-[700px] m-4'>
        {selectedUser && (
          <div className='p-6'>
            <h4 className='text-2xl font-semibold mb-4 dark:text-white/90'>
              Detail User
            </h4>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div className='col-span-2 flex items-center gap-4 mb-2'>
                <div className='w-16 h-16 overflow-hidden rounded-full'>
                  <img
                    src={selectedUser.image}
                    alt={selectedUser.name}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div>
                  <h5 className='font-medium text-lg text-gray-900 dark:text-white'>
                    {selectedUser.name}
                  </h5>
                  <p className='text-gray-500 capitalize'>
                    {selectedUser.type}
                  </p>
                </div>
              </div>

              <div>
                <p className='text-sm text-gray-500'>Email</p>
                <p className='font-medium text-gray-900 dark:text-white break-all'>
                  {selectedUser.email}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>No. Handphone</p>
                <p className='font-medium text-gray-900 dark:text-white'>
                  {selectedUser.phone}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Status</p>
                <p className='font-medium text-gray-900 dark:text-white capitalize'>
                  {selectedUser.status}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Alamat</p>
                <p className='font-medium text-gray-900 dark:text-white whitespace-pre-line'>
                  {selectedUser.address}
                </p>
              </div>
            </div>

            <div className='flex justify-end mt-6'>
              <Button variant='primary' onClick={closeModal}>
                Tutup
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
