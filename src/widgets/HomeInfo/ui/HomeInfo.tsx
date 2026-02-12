import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";

import clsx from "clsx";
import styles from "./HomeInfo.module.css";
import "../../../feature/utils.css";

import Icon from "../../../shared/assets/img/document.svg";
import IconFile1 from "../../../shared/assets/icons/file-contract-solid.svg";
import IconFile2 from "../../../shared/assets/icons/file-lines-solid.svg";
import IconFile3 from "../../../shared/assets/icons/hotel.svg";
import IconFile4 from "../../../shared/assets/icons/handshake-solid.svg";
import IconArrow from "../../../shared/assets/icons/arrow.svg";

export const HomeInfo = () => {
  return (
    <div id="info" className="pb78">
      <ContainerFlex>
        <Text className={styles.containerTopTitle} variant="h2">
          Этапы подписания контракта
        </Text>
        <div className={styles.containerTopIcon}>
          <Icon></Icon>
        </div>
      </ContainerFlex>
      <ContainerFlex>
        <div className={styles.cardsGrid}>
          <InfoCard
            className={styles.cardGrid1}
            title="Оставить заявку"
            icon={<IconFile1 />}
          ></InfoCard>
          <div className={styles.arrowIcon}>
            <IconArrow />
          </div>

          <InfoCard
            className={styles.cardGrid2}
            title="Пройти собеседование"
            icon={<IconFile2 />}
          ></InfoCard>
          <div className={styles.arrowIcon}>
            <IconArrow />
          </div>
          <InfoCard
            className={clsx("fillNone", styles.cardGrid3)}
            title="Пункт отбора"
            icon={<IconFile3 />}
          ></InfoCard>
          <div className={styles.arrowIcon}>
            <IconArrow />
          </div>
          <InfoCard
            className={styles.cardGrid4}
            title="Заключить контракт"
            icon={<IconFile4 />}
          ></InfoCard>
        </div>
      </ContainerFlex>
    </div>
  );
};
