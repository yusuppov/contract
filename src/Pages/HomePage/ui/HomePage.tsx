import styles from "./HomePage.module.css";

import { HomeHeader } from "../../../widgets/HomeHeader";
import { HomeInfo } from "../../../widgets/HomeInfo";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeHeader />
      <div className={styles.main}>
        <HomeInfo />
      </div>
    </div>
  );
};
