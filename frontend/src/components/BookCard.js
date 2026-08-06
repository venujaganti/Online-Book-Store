function BookCard({ book, addToCart }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card book-card h-100">

        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
        />

        <div className="card-body">

          <h5>{book.title}</h5>

          <p className="text-muted">
            {book.author}
          </p>

          <h4 className="text-success">
            ₹{book.price}
          </h4>

          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(book)}
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookCard;