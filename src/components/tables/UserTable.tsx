import { useMemo } from 'react';
import DataTable from '../datatable/DataTable';

interface User {
  id: number;
  image: string;
  name: string;
  email: string;
  role: string;
  gender: string;
  birthdate: string;
  bloodType: string;
  donationCount: number;
  lastDonationDate: string;
}

const userData: User[] = [
  {
    id: 1,
    image: '/images/user/user-17.jpg',
    name: 'Admin',
    email: 'admin@bloody.com',
    role: 'Admin',
    gender: 'Laki-laki',
    birthdate: '1990-06-12',
    bloodType: 'A+',
    donationCount: 5,
    lastDonationDate: '2024-12-20',
  },
  {
    id: 2,
    image: '/images/user/user-18.jpg',
    name: 'Kaiya George',
    email: 'kaiya@mail.com',
    role: 'Petugas',
    gender: 'Perempuan',
    birthdate: '1985-11-03',
    bloodType: 'O+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 3,
    image: '/images/user/user-19.jpg',
    name: 'Zain Geidt',
    email: 'zain@mail.com',
    role: 'Petugas',
    gender: 'Laki-laki',
    birthdate: '1992-03-25',
    bloodType: 'B+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 4,
    image: '/images/user/user-20.jpg',
    name: 'Abram Schleifer',
    email: 'abram@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1994-07-14',
    bloodType: 'AB-',
    donationCount: 8,
    lastDonationDate: '2025-03-12',
  },
  {
    id: 5,
    image: '/images/user/user-21.jpg',
    name: 'Carla George',
    email: 'carla@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1991-01-22',
    bloodType: 'O-',
    donationCount: 3,
    lastDonationDate: '2024-11-05',
  },
  {
    id: 6,
    image: '/images/user/user-22.jpg',
    name: 'Harlan Torres',
    email: 'harlan@mail.com',
    role: 'Admin',
    gender: 'Laki-laki',
    birthdate: '1988-09-18',
    bloodType: 'B-',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 7,
    image: '/images/user/user-23.jpg',
    name: 'Nova Halley',
    email: 'nova@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1996-04-03',
    bloodType: 'A-',
    donationCount: 4,
    lastDonationDate: '2025-01-10',
  },
  {
    id: 8,
    image: '/images/user/user-24.jpg',
    name: 'Zayden Brooks',
    email: 'zayden@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1993-08-16',
    bloodType: 'AB+',
    donationCount: 7,
    lastDonationDate: '2025-02-22',
  },
  {
    id: 9,
    image: '/images/user/user-17.jpg',
    name: 'Lindsey Curtis',
    email: 'lindsey@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1990-06-12',
    bloodType: 'A+',
    donationCount: 5,
    lastDonationDate: '2024-12-20',
  },
  {
    id: 10,
    image: '/images/user/user-18.jpg',
    name: 'Oscar Lane',
    email: 'oscar@mail.com',
    role: 'Petugas',
    gender: 'Laki-laki',
    birthdate: '1989-02-17',
    bloodType: 'O+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 11,
    image: '/images/user/user-19.jpg',
    name: 'Mila Rojas',
    email: 'mila@mail.com',
    role: 'Admin',
    gender: 'Perempuan',
    birthdate: '1987-06-10',
    bloodType: 'B+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 12,
    image: '/images/user/user-20.jpg',
    name: 'Ethan Blake',
    email: 'ethan@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1995-10-05',
    bloodType: 'AB-',
    donationCount: 6,
    lastDonationDate: '2024-09-18',
  },
  {
    id: 13,
    image: '/images/user/user-21.jpg',
    name: 'Amara Vance',
    email: 'amara@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1990-03-28',
    bloodType: 'O-',
    donationCount: 2,
    lastDonationDate: '2023-12-11',
  },
  {
    id: 14,
    image: '/images/user/user-22.jpg',
    name: 'Silas Greer',
    email: 'silas@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1986-07-02',
    bloodType: 'A+',
    donationCount: 10,
    lastDonationDate: '2025-03-01',
  },
  {
    id: 15,
    image: '/images/user/user-23.jpg',
    name: 'Emily Shaw',
    email: 'emily@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1992-01-19',
    bloodType: 'B-',
    donationCount: 3,
    lastDonationDate: '2025-01-25',
  },
  {
    id: 16,
    image: '/images/user/user-24.jpg',
    name: 'Noah Reed',
    email: 'noah@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1991-09-08',
    bloodType: 'AB+',
    donationCount: 9,
    lastDonationDate: '2024-10-10',
  },
  {
    id: 17,
    image: '/images/user/user-17.jpg',
    name: 'Lana Brooks',
    email: 'lana@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1993-12-14',
    bloodType: 'O+',
    donationCount: 6,
    lastDonationDate: '2025-02-02',
  },
  {
    id: 18,
    image: '/images/user/user-18.jpg',
    name: 'Aiden Cross',
    email: 'aiden@mail.com',
    role: 'Petugas',
    gender: 'Laki-laki',
    birthdate: '1994-04-29',
    bloodType: 'A-',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 19,
    image: '/images/user/user-19.jpg',
    name: 'Isla Moore',
    email: 'isla@mail.com',
    role: 'Admin',
    gender: 'Perempuan',
    birthdate: '1990-08-20',
    bloodType: 'B+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 20,
    image: '/images/user/user-20.jpg',
    name: 'Leo Hayes',
    email: 'leo@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1996-11-13',
    bloodType: 'AB-',
    donationCount: 1,
    lastDonationDate: '2024-07-17',
  },
  {
    id: 21,
    image: '/images/user/user-21.jpg',
    name: 'Zara Wells',
    email: 'zara@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1997-05-24',
    bloodType: 'A+',
    donationCount: 2,
    lastDonationDate: '2024-08-21',
  },
  {
    id: 22,
    image: '/images/user/user-22.jpg',
    name: 'Jasper Knox',
    email: 'jasper@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1992-02-01',
    bloodType: 'O+',
    donationCount: 4,
    lastDonationDate: '2024-12-01',
  },
  {
    id: 23,
    image: '/images/user/user-23.jpg',
    name: 'Freya Lane',
    email: 'freya@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1989-10-11',
    bloodType: 'B-',
    donationCount: 3,
    lastDonationDate: '2025-03-05',
  },
  {
    id: 24,
    image: '/images/user/user-24.jpg',
    name: 'Theo Voss',
    email: 'theo@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1988-12-03',
    bloodType: 'A-',
    donationCount: 6,
    lastDonationDate: '2024-11-20',
  },
  {
    id: 25,
    image: '/images/user/user-17.jpg',
    name: 'Aria Monroe',
    email: 'aria@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1991-06-07',
    bloodType: 'AB+',
    donationCount: 5,
    lastDonationDate: '2025-02-15',
  },
  {
    id: 26,
    image: '/images/user/user-18.jpg',
    name: 'Mason Gray',
    email: 'mason@mail.com',
    role: 'Pendonor',
    gender: 'Laki-laki',
    birthdate: '1993-01-02',
    bloodType: 'O-',
    donationCount: 7,
    lastDonationDate: '2025-01-05',
  },
  {
    id: 27,
    image: '/images/user/user-19.jpg',
    name: 'Ivy Rhodes',
    email: 'ivy@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1995-03-14',
    bloodType: 'A+',
    donationCount: 4,
    lastDonationDate: '2024-09-09',
  },
  {
    id: 28,
    image: '/images/user/user-20.jpg',
    name: 'Logan Kerr',
    email: 'logan@mail.com',
    role: 'Petugas',
    gender: 'Laki-laki',
    birthdate: '1987-04-15',
    bloodType: 'B+',
    donationCount: 0,
    lastDonationDate: '-',
  },
  {
    id: 29,
    image: '/images/user/user-21.jpg',
    name: 'Willow Bates',
    email: 'willow@mail.com',
    role: 'Pendonor',
    gender: 'Perempuan',
    birthdate: '1996-07-23',
    bloodType: 'AB-',
    donationCount: 2,
    lastDonationDate: '2024-10-29',
  },
  {
    id: 30,
    image: '/images/user/user-22.jpg',
    name: 'Miles Hart',
    email: 'miles@mail.com',
    role: 'Admin',
    gender: 'Laki-laki',
    birthdate: '1990-05-05',
    bloodType: 'O+',
    donationCount: 0,
    lastDonationDate: '-',
  },
];

export default function UserTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'No.',
        cell: (info: any) => info.row.index + 1,
      },
      {
        accessorKey: 'image',
        header: 'Profile',
        cell: (info: any) => {
          const { name, role } = info.row.original;
          return (
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 overflow-hidden rounded-full'>
                <img
                  src={info.getValue()}
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
        accessorKey: 'bloodType',
        header: 'Golongan Darah',
      },
      {
        accessorKey: 'lastDonationDate',
        header: 'Terakhir Donor',
      },
      {
        accessorKey: 'donationCount',
        header: 'Jumlah Donor',
      },
    ],
    [],
  );

  return (
    <DataTable<User>
      data={userData}
      columns={columns}
      placeholder='Cari user...'
    />
  );
}
