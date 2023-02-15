import styles from "./main.module.css";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/Search";

export function Main() {
    const [repositories, setRepositories] = useState([]);
    const { search, setSearch, setDisplayList, displayList } = useContext(SearchContext);

    const handleSearch = () => {
        fetch(`https://api.github.com/users/${search}/repos`)
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
                setDisplayList(true)
            })
    }

    function handleGoToRepository (name) {
        window.location.href= `https://github.com/MatheusSamburski/${name}`;
    }

    return (
        <div>
            <div className={styles.divFilter}>
                <input type="text" placeholder="Filter" onChange={event => setSearch(event.target.value)} />
                <button onClick={handleSearch}>Buscar</button>
            </div>

            <main>
                <ul className={styles.contentList}>
                    {displayList
                        ?
                        <>
                            {repositories.map(repo => {
                                return (
                                    <li key={repo.full_name} onClick={() => handleGoToRepository(repo.name)}>
                                        <strong>{repo.full_name}</strong>
                                        <p>{repo.description}</p>
                                    </li>
                                )
                            })}
                        </>
                        :
                        <span>Procure um Perfil...</span>
                    }
                </ul>
            </main>
        </div>
    )
}