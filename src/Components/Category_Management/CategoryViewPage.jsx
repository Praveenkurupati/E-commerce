import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import ViewCategory from "./CategoryList";

const CategoryViewPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json(); // Parse response as JSON
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Category List
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : categories.length === 0 ? (
        <Typography variant="body1">No data found</Typography>
      ) : (
        <ViewCategory categories={categories} />
      )}
    </div>
  );
};

export default CategoryViewPage;
