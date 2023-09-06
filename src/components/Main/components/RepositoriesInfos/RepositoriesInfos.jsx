import styles from "./RepositoriesInfos.module.css";

export function RepositoriesInfos({ displayList, repositories, handleGoToRepository }) {
  return (
    <nav>
      <ul className={styles.contentList}>
        {displayList ? (
          <>
            {repositories.map((repo) => {
              return (
                <li
                  key={repo.full_name}
                  onClick={() => handleGoToRepository(repo.name)}
                >
                  <strong>{repo.full_name}</strong>
                  <p>{repo.description}</p>
                </li>
              );
            })}
          </>
        ) : (
          <span>Procure um Perfil...</span>
        )}
      </ul>
    </nav>
  );
}
