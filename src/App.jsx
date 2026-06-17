import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MacroBanner from './components/MacroBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Concourse from './pages/Concourse';
import Subscribe from './pages/Subscribe';
import Login from './pages/Login';
import Account from './pages/Account';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Intelligence from './pages/Intelligence';
import Ratings from './pages/Ratings';
import WatchlistPage from './pages/WatchlistPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MacroBanner />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Concourse />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dossiers/:slug" element={<Concourse />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
