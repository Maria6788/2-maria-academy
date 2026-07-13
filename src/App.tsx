/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery';
import EventsNews from './pages/EventsNews';
import NoticeBoard from './pages/NoticeBoard';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const saved = localStorage.getItem('pinecrest_logged_in');
    return saved === 'true';
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('pinecrest_logged_in', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('pinecrest_logged_in');
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll back to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'academics':
        return <Academics />;
      case 'admissions':
        return <Admissions />;
      case 'faculty':
        return <Faculty />;
      case 'classes':
        return <Classes />;
      case 'gallery':
        return <Gallery />;
      case 'events':
        return <EventsNews />;
      case 'notice-board':
        return <NoticeBoard />;
      case 'student-life':
        return <StudentLife />;
      case 'contact':
        return <Contact />;
      case 'login':
        return (
          <Login
            setCurrentPage={setCurrentPage}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case 'dashboard':
        return isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login
            setCurrentPage={setCurrentPage}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-blue-600/10 selection:text-blue-700">
      {/* Interactive Sticky Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Main Main Stage Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            id="page-stage-container"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Page Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

