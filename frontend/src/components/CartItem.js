function CartItem({ item, removeItem }) {
  return (
    <div className="card mb-3">

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <h5>{item.title}</h5>

          <p>
            ₹{item.price}
          </p>

        </div>

        <button
          className="btn btn-danger"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;