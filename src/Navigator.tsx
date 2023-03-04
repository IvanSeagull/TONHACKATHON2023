import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import CreateJob from './pages/CreateJob';
import JobLists from './pages/JobLists';
import UserProfile from './pages/UserProfile';

const Navigator = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/jobs" element={<JobLists />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create-job" element={<CreateJob />} />

        <Route path="/" element={<h1>123</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
