import React from "react";
import { Table } from "antd";

const AddressList = ({ addresses }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Address Type",
      dataIndex: "type",
      key: "type",
    },
  ];

  return (
    <Table
      dataSource={addresses}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
};

export default AddressList;
