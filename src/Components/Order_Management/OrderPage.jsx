import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from API
    axios
      .get("/cartItems")
      .then((response) => {
        setCartItems(response.data.cartItems);
        setTotalPrice(response.data.totalPrice);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handlePlaceOrder = () => {
    // Create order based on cart items
    axios
      .post("/orderPost", {
        totalAmount: totalPrice,
        productIds: cartItems.map((item) => item.productId),
      })
      .then((response) => {
        console.log("Order placed successfully:", response.data.order);
        // Optionally, clear cart items or show success message
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default OrderComponent;
