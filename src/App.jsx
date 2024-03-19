import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import AddressPage from "./Components/Address/AdddressPage";
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegisterForm";
// import ProtectedRoute from "./ProtectedRoute"; // Assuming you have a ProtectedRoute component

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/login"
          element={
            <div>
              <button onClick={() => openModal(<LoginPage />)}>
                Open Login
              </button>
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
            </div>
          }
        />
        <Route
          path="/address"
          element={
            <div>
              <button onClick={() => openModal(<AddressPage />)}>
                Open Address
              </button>
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
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
