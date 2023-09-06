import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.divFilter}>
      <input
        type="text"
        placeholder="Filter"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => handleSearch()}>Buscar</button>
    </div>
  );
}
