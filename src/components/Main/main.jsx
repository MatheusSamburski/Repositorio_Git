import { useState, useEffect } from "react";
import { ProfileInfos } from "./components/ProfileInfos/ProfileInfos";
import { RepositoriesInfos } from "./components/RepositoriesInfos/RepositoriesInfos";
import styles from "./main.module.css";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function Main() {
  const [repositories, setRepositories] = useState([]);
  const [caracteries, setCaracteries] = useState({});
  const [search, setSearch] = useState("");
  const [displayList, setDisplayList] = useState(false);

  async function getCaracteries() {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    setCaracteries(data);
  }

  useEffect(() => {
    getCaracteries();
  }, [repositories]);

  async function handleSearch() {
    const response = await fetch(
      `https://api.github.com/users/${search}/repos`
    );
    const data = await response.json();

    setRepositories(data);
    setDisplayList(true);
  }

  function handleGoToRepository(name) {
    window.location.href = `https://github.com/MatheusSamburski/${name}`;
  }

  return (
    <div>
      <SearchBar />

      <main>
        <ProfileInfos caracteries={caracteries} displayList={displayList} />
        <RepositoriesInfos
          displayList={displayList}
          repositories={repositories}
          handleGoToRepository={(name) => handleGoToRepository(name)}
        />
      </main>
    </div>
  );
}
