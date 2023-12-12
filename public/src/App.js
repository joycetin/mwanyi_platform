import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/layout';
import Login from './components/login';
import Signup from './components/signup';
import Home from './pages/home';
import About from './pages/about';
import Contactus from './pages/contactus';
import CoffeeInfo from './pages/coffeeInfo';
import MarketPrices from './pages/marketPrices';
import Soil from './pages/soil';
import FarmingMethods from './pages/farmingMethods';
import './App.css';
import Dashboard from './components/dashboard';
import MessageInput from './components/message';


const App = () => {
  return (
    <Router>
      <Layout> {/* Use the Layout component to wrap your content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/coffeeinfo" element={<CoffeeInfo />} />
          <Route path="/marketprices" element={<MarketPrices />} />
          <Route path="/soil" element={<Soil />} />
          <Route path="/farmingmethods" element={<FarmingMethods />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/message" element={<MessageInput />} />

          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
