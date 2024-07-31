import styles from '../styles/ToDoList.module.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search tasks..."
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
