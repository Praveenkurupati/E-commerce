import React, { useState } from "react";
import LoginForm from "./Login/Login";
import RegistrationForm from "./RegisterForm";
import AddressForm from "./Address/Address";
import AddressList from "./Address/AddressList";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const token = sessionStorage.getItem("token");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegistration = () => {
    // Perform registration logic
    // You may also set loggedIn to true after registration
  };

  const handleAddressSubmit = (address) => {
    // Perform address submission logic
    setAddresses([...addresses, address]);
  };

  return (
    <div>
      {!token ? (
        <>
          <LoginForm onLogin={handleLogin} />
          <RegistrationForm onRegistration={handleRegistration} />
        </>
      ) : (
        <>
          <AddressForm onSubmit={handleAddressSubmit} />
          <AddressList addresses={addresses} />
        </>
      )}
    </div>
  );
};

export default Home;
