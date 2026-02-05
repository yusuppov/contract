import styles from "./HomePage.module.css";

import { HomeHeader } from "../../../widgets/HomeHeader";
import { HomeInfo } from "../../../widgets/HomeInfo";
import { HomeReward } from "../../../widgets/HomeReward";
import { HomeBackpack } from "../../../widgets/HomeBackpack";
import { MoreSupport } from "../../../widgets/MoreSupport";
import { Items } from "../../../widgets/Items";
import { Branch } from "../../../widgets/Branch";
import { Conditions } from "../../../widgets/Conditions";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeHeader />
      <div className={styles.main}>
        <HomeInfo />
        <HomeReward />
        <HomeBackpack />
        <MoreSupport />
        <section id="branch">
          <Branch />
        </section>
        <section id="conditions">
          <Conditions />
        </section>
        <section id="items">
          <Items />
        </section>
      </div>
    </div>
  );
};
