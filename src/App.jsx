import { Section } from './components/Section/section';
import { Main } from './components/Main/main';
import styles from "./App.module.css";
import { SearchProvider } from './context/Search';
import "./global.css"
import { Header } from './components/Header/header';


export function App() {

  return (
    <>
      <Header />
      <div className={styles.content}>
        <SearchProvider>
          <Section />
          <Main />
        </SearchProvider>
      </div>
    </>
  )
}
