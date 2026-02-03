import styles from "./HomePage.module.css";

import { HomeHeader } from "../../../widgets/HomeHeader";
import { HomeInfo } from "../../../widgets/HomeInfo";
import { HomeReward } from "../../../widgets/HomeReward";
import { HomeBackpack } from "../../../widgets/HomeBackpack";
import { MoreSupport } from "../../../widgets/MoreSupport";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeHeader />
      <div className={styles.main}>
        <HomeInfo />
        <HomeReward />
        <HomeBackpack />
        <MoreSupport />
      </div>
    </div>
  );
};
