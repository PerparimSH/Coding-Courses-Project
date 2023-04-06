import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AboutUS from "./AboutUS";
import Banner from "./Banner";
import TOP from "./TOP";
import ContactUS from "./ContactUS";
import Prices from "./Prices";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Premium from "./Premium";



const Wrapper = () => {
  const user = JSON.parse(localStorage.getItem('user'));

    return (
      <>
        <Banner />
        <AboutUS />
        {user && <Premium /> }
        <ContactUS />
      </>
    );
  };
  
  const App = () => {
    const handleLoginSuccess = () => {
        // Do something after successful login
      };
      
    return (
      <>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Wrapper />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </HashRouter>
        <TOP />
        <Footer />
      </>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("app"));
  