import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(items);
  }, []);

  const removeItem = (id) => {

    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>No Books In Cart</h4>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem}
            />
          ))}

          <h3>Total : ₹{total}</h3>

          <Link
            to="/checkout"
            className="btn btn-success"
          >
            Checkout
          </Link>
        </>
      )}

    </div>
  );
}

export default Cart;