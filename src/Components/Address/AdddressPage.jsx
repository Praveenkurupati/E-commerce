import React, { useState } from "react";
import { Button, Modal } from "antd";
import AddressForm from "./Address";

const AddressPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values) => {
    // Handle address submission logic here
    console.log("Submitted Address:", values);
    setIsModalVisible(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Address Page</h1>
      <Button type="primary" onClick={showModal}>
        Add New Address
      </Button>
      <Modal
        title="Add New Address"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddressForm onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default AddressPage;
