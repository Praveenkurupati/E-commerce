// AddProduct.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Select, MenuItem } from "@mui/material";

const AddProduct = ({ categories, handleAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = () => {
    if (
      productName.trim() !== "" &&
      selectedCategory !== "" &&
      productPrice.trim() !== ""
    ) {
      // Call the handleAddProduct function passed from parent component
      handleAddProduct({
        name: productName,
        category: selectedCategory,
        price: productPrice,
      });
      // Clear the input fields
      setProductName("");
      setSelectedCategory("");
      setProductPrice("");
    }
  };

  return (
    <Box>
      <TextField
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Select
        label="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        label="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
