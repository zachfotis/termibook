function SearchBar({ loading }) {
  return (
    <div className="search-bar-container">
      <input type="text" name="search" placeholder="Search..." disabled={loading ? true : false} />
      <input type="submit" value="Search" disabled={loading ? true : false} />
    </div>
  );
}
export default SearchBar;
