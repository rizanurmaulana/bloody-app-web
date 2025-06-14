import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import AuthLayout from './layout/AuthLayout';
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard/Overview';
import FormElements from './pages/Forms/FormElements';
import NotFound from './pages/OtherPage/NotFound';
import BasicTables from './pages/Tables/BasicTables';
import Alerts from './pages/UiElements/Alerts';
import Avatars from './pages/UiElements/Avatars';
import Badges from './pages/UiElements/Badges';
import Buttons from './pages/UiElements/Buttons';
import Images from './pages/UiElements/Images';
import Videos from './pages/UiElements/Videos';
import UserProfiles from './pages/UserProfiles';
import Calendar from './pages/Events/Calendar';
import Schedule from './pages/Events/Schedule';
import User from './pages/User';
import Facility from './pages/Facility';
import DonorSchedule from './pages/Events/DonorSchedule';
import DonorRegistration from './pages/Events/DonorRegistration';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path='/' element={<Dashboard />} />
            {/* Others Page */}
            <Route path='/profile' element={<UserProfiles />} />
            <Route path='/user' element={<User />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/user/schedule' element={<DonorSchedule />} />
            <Route path='/user/schedule/:id' element={<DonorRegistration />} />
            <Route path='/facility' element={<Facility />} />
            <Route path='/blank' element={<Blank />} />

            {/* Forms */}
            <Route path='/form-elements' element={<FormElements />} />

            {/* Tables */}
            <Route path='/basic-tables' element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/avatars' element={<Avatars />} />
            <Route path='/badges' element={<Badges />} />
            <Route path='/buttons' element={<Buttons />} />
            <Route path='/images' element={<Images />} />
            <Route path='/videos' element={<Videos />} />
          </Route>

          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          {/* Fallback Route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
