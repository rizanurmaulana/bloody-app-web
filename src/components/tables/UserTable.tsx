import { useMemo, useState } from 'react';
import DataTable from '../datatable/DataTable';
import Button from '../ui/button/Button';
import Badge from '../ui/badge/Badge';
import { Modal } from '../ui/modal';
import { useModal } from '../../hooks/useModal';

interface User {
  id: number;
  image: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  gender: string;
  birthdate: string;
  bloodType: string;
  weight: number;
  status: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

const userData = [
  {
    id: 1,
    image: '/images/user/user-24.jpg',
    name: 'Ismail Wahyuni',
    email: 'janetlestari@pd.net.id',
    phone: '+62-084-775-0916',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1986-08-23',
    bloodType: 'A-',
    weight: 57,
    status: 'active',
    address: 'Jl. Pacuan Kuda No. 347\nSukabumi, JB 28519',
    createdAt: '2024-02-28T11:37:32',
    updatedAt: '2024-06-14T08:29:06',
  },
  {
    id: 2,
    image: '/images/user/user-17.jpg',
    name: 'Ika Halimah',
    email: 'kalaiswahyudi@gmail.com',
    phone: '+62 (0493) 384 0159',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1980-05-04',
    bloodType: 'O-',
    weight: 72,
    status: 'active',
    address: 'Gg. Pacuan Kuda No. 9\nMadiun, Lampung 14031',
    createdAt: '2023-12-03T11:52:08',
    updatedAt: '2024-09-12T18:27:23',
  },
  {
    id: 3,
    image: '/images/user/user-22.jpg',
    name: 'KH. Tedi Januar',
    email: 'arajasa@yahoo.com',
    phone: '(029) 810-1655',
    role: 'admin',
    gender: 'Laki-laki',
    birthdate: '1984-06-10',
    bloodType: 'A+',
    weight: 57,
    status: 'active',
    address: 'Jl. Pasteur No. 106\nBanjar, JB 72159',
    createdAt: '2023-04-28T09:35:06',
    updatedAt: '2024-11-05T22:37:18',
  },
  {
    id: 11,
    image: '/images/user/user-19.jpg',
    name: 'Mila Rojas',
    email: 'mila@mail.com',
    phone: '+62 813 4567 8978',
    role: 'hospital',
    gender: 'Perempuan',
    birthdate: '1987-06-10',
    bloodType: 'B+',
    weight: 62,
    status: 'active',
    address: 'Jl. Kenangan No. 5, Kuningan',
    createdAt: '2023-07-15T12:10:00Z',
    updatedAt: '2024-04-02T09:00:00Z',
  },
  {
    id: 12,
    image: '/images/user/user-20.jpg',
    name: 'Ethan Blake',
    email: 'ethan@mail.com',
    phone: '+62 852 9876 5432',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1995-10-05',
    bloodType: 'AB-',
    weight: 74,
    status: 'inactive',
    address: 'Jl. Pahlawan No. 4, Indramayu',
    createdAt: '2022-11-10T15:30:00Z',
    updatedAt: '2024-02-11T16:30:00Z',
  },
  {
    id: 13,
    image: '/images/user/user-21.jpg',
    name: 'Amara Vance',
    email: 'amara@mail.com',
    phone: '+62 813 2345 6789',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1990-03-28',
    bloodType: 'O-',
    weight: 59,
    status: 'active',
    address: 'Jl. Merdeka No. 99, Cirebon',
    createdAt: '2023-04-01T08:00:00Z',
    updatedAt: '2025-03-10T11:00:00Z',
  },
  {
    id: 14,
    image: '/images/user/user-22.jpg',
    name: 'Silas Greer',
    email: 'silas@mail.com',
    phone: '+62 856 1122 3344',
    role: 'recipient',
    gender: 'Laki-laki',
    birthdate: '1986-07-02',
    bloodType: 'A+',
    weight: 80,
    status: 'active',
    address: 'Jl. Anggrek No. 18, Majalengka',
    createdAt: '2023-02-14T09:40:00Z',
    updatedAt: '2025-01-19T07:30:00Z',
  },
  {
    id: 15,
    image: '/images/user/user-23.jpg',
    name: 'Emily Shaw',
    email: 'emily@mail.com',
    phone: '+62 812 2233 4455',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1992-01-19',
    bloodType: 'B-',
    weight: 58,
    status: 'active',
    address: 'Jl. Flamboyan No. 5, Kuningan',
    createdAt: '2023-09-30T10:20:00Z',
    updatedAt: '2024-10-30T10:20:00Z',
  },
  {
    id: 16,
    image: '/images/user/user-24.jpg',
    name: 'Noah Reed',
    email: 'noah@mail.com',
    phone: '+62 857 3344 5566',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1991-09-08',
    bloodType: 'AB+',
    weight: 82,
    status: 'inactive',
    address: 'Jl. Cempaka No. 33, Indramayu',
    createdAt: '2022-12-12T12:12:00Z',
    updatedAt: '2024-07-11T12:12:00Z',
  },
  {
    id: 17,
    image: '/images/user/user-17.jpg',
    name: 'Lana Brooks',
    email: 'lana@mail.com',
    phone: '+62 812 9988 7766',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1993-12-14',
    bloodType: 'O+',
    weight: 60,
    status: 'active',
    address: 'Jl. Anyelir No. 7, Cirebon',
    createdAt: '2023-06-06T07:30:00Z',
    updatedAt: '2025-03-01T10:00:00Z',
  },
  {
    id: 18,
    image: '/images/user/user-18.jpg',
    name: 'Aiden Cross',
    email: 'aiden@mail.com',
    phone: '+62 813 3322 4455',
    role: 'hospital',
    gender: 'Laki-laki',
    birthdate: '1994-04-29',
    bloodType: 'A-',
    weight: 77,
    status: 'active',
    address: 'Jl. Pelajar No. 123, Majalengka',
    createdAt: '2023-01-01T01:00:00Z',
    updatedAt: '2025-01-01T01:00:00Z',
  },
  {
    id: 19,
    image: '/images/user/user-19.jpg',
    name: 'Isla Moore',
    email: 'isla@mail.com',
    phone: '+62 812 3344 5566',
    role: 'admin',
    gender: 'Perempuan',
    birthdate: '1990-08-20',
    bloodType: 'B+',
    weight: 65,
    status: 'active',
    address: 'Jl. Nusa Indah No. 8, Kuningan',
    createdAt: '2023-08-17T17:00:00Z',
    updatedAt: '2024-03-21T12:00:00Z',
  },
  {
    id: 20,
    image: '/images/user/user-20.jpg',
    name: 'Leo Hayes',
    email: 'leo@mail.com',
    phone: '+62 857 1122 3344',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1996-11-13',
    bloodType: 'AB-',
    weight: 79,
    status: 'active',
    address: 'Jl. Cendrawasih No. 9, Indramayu',
    createdAt: '2022-10-10T11:11:00Z',
    updatedAt: '2024-12-25T08:00:00Z',
  },
  {
    id: 21,
    image: '/images/user/user-21.jpg',
    name: 'Zara Wells',
    email: 'zara@mail.com',
    phone: '+62 856 7788 9900',
    role: 'recipient',
    gender: 'Perempuan',
    birthdate: '1997-05-24',
    bloodType: 'A+',
    weight: 54,
    status: 'inactive',
    address: 'Jl. Angsana No. 77, Majalengka',
    createdAt: '2023-03-11T09:00:00Z',
    updatedAt: '2025-02-28T09:00:00Z',
  },
  {
    id: 22,
    image: '/images/user/user-22.jpg',
    name: 'Jasper Knox',
    email: 'jasper@mail.com',
    phone: '+62 812 2233 4455',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1992-02-01',
    bloodType: 'O+',
    weight: 83,
    status: 'active',
    address: 'Jl. Mahoni No. 66, Cirebon',
    createdAt: '2022-09-01T08:00:00Z',
    updatedAt: '2025-03-15T14:00:00Z',
  },
  {
    id: 23,
    image: '/images/user/user-23.jpg',
    name: 'Freya Lane',
    email: 'freya@mail.com',
    phone: '+62 813 5566 7788',
    role: 'recipient',
    gender: 'Perempuan',
    birthdate: '1989-10-11',
    bloodType: 'B-',
    weight: 61,
    status: 'active',
    address: 'Jl. Teratai No. 12, Indramayu',
    createdAt: '2022-08-20T14:00:00Z',
    updatedAt: '2025-01-10T14:00:00Z',
  },
  {
    id: 24,
    image: '/images/user/user-24.jpg',
    name: 'Theo Voss',
    email: 'theo@mail.com',
    phone: '+62 852 4455 6677',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1988-12-03',
    bloodType: 'A-',
    weight: 75,
    status: 'inactive',
    address: 'Jl. Dahlia No. 9, Kuningan',
    createdAt: '2022-06-15T10:00:00Z',
    updatedAt: '2024-11-30T10:00:00Z',
  },
  {
    id: 25,
    image: '/images/user/user-17.jpg',
    name: 'Aria Monroe',
    email: 'aria@mail.com',
    phone: '+62 811 1122 3344',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1991-06-07',
    bloodType: 'AB+',
    weight: 60,
    status: 'active',
    address: 'Jl. Sawo No. 2, Cirebon',
    createdAt: '2023-05-05T09:00:00Z',
    updatedAt: '2025-03-18T09:00:00Z',
  },
  {
    id: 26,
    image: '/images/user/user-18.jpg',
    name: 'Mason Gray',
    email: 'mason@mail.com',
    phone: '+62 814 3344 5566',
    role: 'donor',
    gender: 'Laki-laki',
    birthdate: '1993-01-02',
    bloodType: 'O-',
    weight: 80,
    status: 'active',
    address: 'Jl. Rambutan No. 14, Majalengka',
    createdAt: '2023-07-17T17:00:00Z',
    updatedAt: '2024-08-10T10:00:00Z',
  },
  {
    id: 27,
    image: '/images/user/user-19.jpg',
    name: 'Ivy Rhodes',
    email: 'ivy@mail.com',
    phone: '+62 813 4455 6677',
    role: 'recipient',
    gender: 'Perempuan',
    birthdate: '1995-03-14',
    bloodType: 'A+',
    weight: 57,
    status: 'active',
    address: 'Jl. Semangka No. 6, Indramayu',
    createdAt: '2023-03-03T13:00:00Z',
    updatedAt: '2025-02-20T13:00:00Z',
  },
  {
    id: 28,
    image: '/images/user/user-20.jpg',
    name: 'Logan Kerr',
    email: 'logan@mail.com',
    phone: '+62 815 6677 8899',
    role: 'hospital',
    gender: 'Laki-laki',
    birthdate: '1987-04-15',
    bloodType: 'B+',
    weight: 76,
    status: 'active',
    address: 'Jl. Apel No. 5, Kuningan',
    createdAt: '2022-07-07T07:00:00Z',
    updatedAt: '2024-12-10T08:00:00Z',
  },
  {
    id: 29,
    image: '/images/user/user-21.jpg',
    name: 'Willow Bates',
    email: 'willow@mail.com',
    phone: '+62 816 1122 3344',
    role: 'donor',
    gender: 'Perempuan',
    birthdate: '1996-07-23',
    bloodType: 'AB-',
    weight: 55,
    status: 'inactive',
    address: 'Jl. Manggis No. 10, Cirebon',
    createdAt: '2023-01-10T10:00:00Z',
    updatedAt: '2025-01-29T09:00:00Z',
  },
  {
    id: 30,
    image: '/images/user/user-22.jpg',
    name: 'Miles Hart',
    email: 'miles@mail.com',
    phone: '+62 817 2233 4455',
    role: 'admin',
    gender: 'Laki-laki',
    birthdate: '1990-05-05',
    bloodType: 'O+',
    weight: 85,
    status: 'active',
    address: 'Jl. Belimbing No. 3, Majalengka',
    createdAt: '2022-05-01T08:00:00Z',
    updatedAt: '2024-11-15T10:00:00Z',
  },
];

// Fungsi untuk menghitung usia dari birthdate
const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export default function UserTable() {
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
          const { image, name, role } = info.row.original;
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
                  {role}
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
        accessorKey: 'gender',
        header: 'Gender',
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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenDetail = (id: number) => {
    const user = userData.find((user) => user.id === id);
    if (user) {
      setSelectedUser(user);
      openModal();
    }
  };

  return (
    <>
      <DataTable<User>
        tableName='Daftar Pendonor'
        data={userData}
        columns={columns}
        placeholder='Cari user...'
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
                    {selectedUser.role}
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
                <p className='text-sm text-gray-500'>Gender</p>
                <p className='font-medium text-gray-900 dark:text-white capitalize'>
                  {selectedUser.gender}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Tanggal Lahir</p>
                <p className='font-medium text-gray-900 dark:text-white'>
                  {selectedUser.birthdate}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Usia</p>
                <p className='font-medium text-gray-900 dark:text-white'>
                  {calculateAge(selectedUser.birthdate)}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Golongan Darah</p>
                <p className='font-medium text-gray-900 dark:text-white'>
                  {selectedUser.bloodType}
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Berat Badan</p>
                <p className='font-medium text-gray-900 dark:text-white'>
                  {selectedUser.weight} kg
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Status</p>
                <p className='font-medium text-gray-900 dark:text-white capitalize'>
                  {selectedUser.status}
                </p>
              </div>
              <div className='col-span-2'>
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
