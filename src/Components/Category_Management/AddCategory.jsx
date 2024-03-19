import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const AddCategory = ({ handleAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (categoryName.trim() !== "") {
      handleAddCategory(categoryName);
      setCategoryName("");
    }
  };

  return (
    <Box>
      <TextField
        label="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Category
      </Button>
    </Box>
  );
};

export default AddCategory;
