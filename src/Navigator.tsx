import React from 'react';
import { BrowserRouter, Routes, Route, useNavigation } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import CreateJob from './pages/CreateJob';
import Job from './pages/Job';
import JobLists from './pages/JobLists';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';

const Navigator = () => {
  const path = 'TONHACKATHON2023';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`jobs`} element={<JobLists />} />
        <Route path={`jobs/:id`} element={<Job />} />

        <Route path={`profile`} element={<UserProfile />} />
        <Route path={`create-job`} element={<CreateJob />} />
        <Route path={`register`} element={<Registration />} />

        <Route path={``} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
