import React, { useState } from "react";
import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
  Button,
  TextField,
} from "@mui/material";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]); // Assuming orders is an array of order objects
  const [statusFilter, setStatusFilter] = useState("all");

  // Function to handle updating order status
  const handleUpdateStatus = (orderId, newStatus) => {
    // Update the status of the order with orderId to newStatus
    // This function should be implemented based on your backend logic
    console.log(`Updating status of order ${orderId} to ${newStatus}`);
  };

  return (
    <Box>
      <TextField
        select
        label="Filter by Status"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </TextField>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Order ID</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Customer Name</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Status</TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .filter((order) =>
                statusFilter === "all" ? true : order.status === statusFilter
              )
              .map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleUpdateStatus(order.id, "newStatus")}
                    >
                      Update Status
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {/* Pagination component goes here */}
    </Box>
  );
};

export default OrderManagement;
