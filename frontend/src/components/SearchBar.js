function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search books..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;