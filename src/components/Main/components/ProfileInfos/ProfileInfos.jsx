import styles from "./ProfileInfos.module.css";

export function ProfileInfos({displayList, caracteries}) {
  return (
    <div className={styles.content}>
      {displayList ? (
        <>
          <img
            src={caracteries.avatar_url}
            alt="Imagem de Usuário"
            className={styles.usuario}
          />
          <strong>{caracteries.name}</strong>
          <div className={styles.infoUser}>
            <span>{caracteries.company}</span>
            <span>{caracteries.location}</span>
            <span>{caracteries.bio}</span>
          </div>
        </>
      ) : (
        <span>Aguardando...</span>
      )}
    </div>
  );
}
