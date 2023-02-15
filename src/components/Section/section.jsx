import styles from "./section.module.css"
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/Search";

export function Section() {
    const [caracteries, setCaracteries] = useState({});
    const { search, displayList} = useContext(SearchContext);

    async function getCaracteries() {
        const response = await fetch(`https://api.github.com/users/${search}`)
        const data = await response.json()
        setCaracteries(data);
    }

    useEffect(() => {
        getCaracteries()
    }, [])


    return (
        <div className={styles.content}>
            {displayList
                ?
                <>
                    <img src={caracteries.avatar_url } alt="Imagem de Usuário" className={styles.usuario} />
                    <strong>{caracteries.name}</strong>
                    <div className={styles.infoUser}>
                        <span>{caracteries.company}</span>
                        <span>{caracteries.location}</span>
                        <span>{caracteries.bio}</span>
                    </div>
                </>
                :
                <span>Aguardando...</span>
            }
        </div>
    )
}