import styles from "./Heather.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Heather() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
