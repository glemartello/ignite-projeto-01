import { Heather } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

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
