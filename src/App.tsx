// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;