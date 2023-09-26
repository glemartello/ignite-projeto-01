import { Heather } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Heather />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Glenda Martello" content="Lorem ipsum dolor sit amet" />
          <Post author="Alexandre" content="Um post legal" />
        </main>
      </div>
    </div>
  );
}
