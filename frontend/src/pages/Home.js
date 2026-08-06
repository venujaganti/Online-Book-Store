import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-5">

      <h1 className="display-4">
        Welcome to Online Book Store
      </h1>

      <p className="lead">
        Discover thousands of books from your favorite authors.
      </p>

      <Link to="/books" className="btn btn-primary btn-lg mt-3">
        Browse Books
      </Link>

    </div>
  );
}

export default Home;