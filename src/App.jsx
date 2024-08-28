import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adoption from './pages/Adoption';
import Release from './pages/Release';
import Where from './pages/Where';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Faq from './pages/Faq';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    console.log("hello");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  return (
    <>
    <div className="page-container">
      <div id="content-wrap"> 
        <Router>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adoption" element={<Adoption isLoggedIn={isLoggedIn} />} /> 
                <Route path="/release" element={<Release />} />
                <Route path="/where" element={<Where />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>

        </Router>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
    </>
  );
};

export default App;
