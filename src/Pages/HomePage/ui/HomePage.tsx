import styles from "./HomePage.module.css";

import { HomeHeader } from "../../../widgets/HomeHeader";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeHeader />
      <div className={styles.main}></div>
    </div>
  );
};
