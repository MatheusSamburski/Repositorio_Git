import styles from "./header.module.css"
import logoGithub from "../../assets/Logo.png"
import { useQuery } from "react-query";
import axios from "axios";

export function Header() {
    // const { data, isFetching } = useQuery("MatheusSamburski", async () => {
    //     const response = await axios.get("https://api.github.com/users/MatheusSamburski")

    //     return response.data;
    // })

    return (
        <header className={styles.header}>
            <div className={styles.divUsuario}>
                {/* {isFetching && <p>Carregando...</p>}
                {data.map(caracteries => (
                    <strong key={caracteries.name}>{caracteries.name}</strong>
                ))} */}
                <img src="https://github.com/MatheusSamburski.png" alt="Imagem de Usuário" className={styles.usuario} />
                <strong>MatheusSamburski</strong>
            </div>

            <img src={logoGithub} className={styles.logotipo} />
        </header>
    )
}