import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import AddressPage from "./Components/Address/AdddressPage";
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegisterForm";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/Footer/AboutUs";
import ContactUs from "./Components/Footer/ContactUs";
import CategoryViewPage from "./Components/Category_Management/CategoryViewPage";

const App = () => {
  const [modalComponent, setModalComponent] = useState(null);

  const openModal = (component) => {
    setModalComponent(component);
  };

  const closeModal = () => {
    setModalComponent(null);
  };

  return (
    <Router>
      <Header /> {/* Header displayed on every screen */}
      {modalComponent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {modalComponent}
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/categories" element={<CategoryViewPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/login"
          element={
            <button onClick={() => openModal(<LoginPage />)}>Open Login</button>
          }
        />
        <Route
          path="/address"
          element={
            <button onClick={() => openModal(<AddressPage />)}>
              Open Address
            </button>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
