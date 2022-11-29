import styles from "./main.module.css";
import { useQuery } from "react-query";
import axios from "axios";

export function Main() {
    const { data, isFetching } = useQuery("repos", async () => {
        const response = await axios.get("https://api.github.com/users/MatheusSamburski/repos")

        return response.data;
    })


    return (
        <div>
            <div className={styles.divFilter}>
                <label for="filter" class="sr-only"></label>
                <input id="filter" type="text" placeholder="Filter" />
            </div>

            <main>
                <ul className={styles.contentList}>
                    {isFetching && <p>Carregando...</p>}
                    {data?.map(repo => {
                        return (
                            <li key={repo.full_name}>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}