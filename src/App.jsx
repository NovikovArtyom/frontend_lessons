import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';


import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainpage_container}>
        <Navbar />
        <AddTask />
      </div>
      <Footer />
    </div>
  );
}

