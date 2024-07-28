import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AuctionDetails from './pages/AuctionDetails';
import Login from './pages/Login';
import SignupSuccess from './pages/SignupSuccess';
import Signup from './pages/Signup';
import BidDetails from './pages/BidDetails';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bid-details" element={<BidDetails />} />
      </Routes>
    </>
  );
}

export default App;