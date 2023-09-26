import { Heather } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Heather />
      <Post author="Glenda Martello" content="Lorem ipsum dolor sit amet" />
      <Post author="Alexandre" content="Um post legal" />
    </div>
  );
}
