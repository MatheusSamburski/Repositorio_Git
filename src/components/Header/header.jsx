import styles from "./header.module.css";
import logoGit from "./Logo.png";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoGit} alt="logo do GitHub blog" />
        </header>
    );
}

