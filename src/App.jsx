import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MacroBanner from './components/MacroBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Concourse from './pages/Concourse';
import Subscribe from './pages/Subscribe';
import Login from './pages/Login';
import Account from './pages/Account';

export default function App() {
  return (
    <>
      <MacroBanner />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Concourse />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dossiers/:slug" element={<Concourse />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
