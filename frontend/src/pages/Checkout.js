import { useState } from "react";
import { createOrder } from "../services/api";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = async () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      await createOrder({
        customerName: name,
        address,
        items: cart,
      });

      localStorage.removeItem("cart");

      alert("Order Placed Successfully!");

      window.location.href = "/orders";
    } catch (err) {
      console.error(err);
      alert("Unable to place order");
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2 className="mb-4">Checkout</h2>

      <input
        className="form-control mb-3"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        className="btn btn-success w-100"
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;