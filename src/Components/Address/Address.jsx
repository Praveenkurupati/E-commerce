import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddressForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="type" label="Address Type" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Address
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
