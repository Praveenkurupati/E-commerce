import React from "react";
import { Form, Input, Button } from "antd";

const AddressForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { address, addressType, userId } = values;
    const formData = { address, addressType, userId };
    onSubmit(formData);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="addressType"
        label="Address Type"
        rules={[{ required: true }]}
      >
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
