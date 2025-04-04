import Login from "@/components/layout/Login/Login";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Login />
    </div>
  );
}
