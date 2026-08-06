import { useEffect, useState } from "react";
import { getBooks } from "../services/api";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function Books() {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

    const fetchBooks = async () => {
    try {
        const res = await getBooks();
        setBooks(res.data);
    } catch (error) {
        console.error(error);
    }
 };

  const addToCart = (book) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(book);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Book Added To Cart");
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2 className="mb-4">
        Books
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="row">

        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Books;