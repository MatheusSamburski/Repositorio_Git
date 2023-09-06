import { Main } from "./components/Main/main";
import { Header } from "./components/Header/header";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Main />
      </div>
    </>
  );
}
