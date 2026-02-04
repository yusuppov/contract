import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";

import styles from "./HomeInfo.module.css";
import "../../../feature/utils.css";

import Icon from "../../../shared/assets/img/document.svg";
import IconFile1 from "../../../shared/assets/icons/file-contract-solid.svg";
import IconFile2 from "../../../shared/assets/icons/file-lines-solid.svg";
import IconFile3 from "../../../shared/assets/icons/handshake-solid.svg";
import IconFile4 from "../../../shared/assets/icons/stethoscope-solid.svg";

export const HomeInfo = () => {
  return (
    <div>
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
            className="blueBorder"
            title="Оставить заявку"
            icon={<IconFile1 />}
          ></InfoCard>
          <InfoCard
            className="blueBorder"
            title="Пройти собеседование"
            icon={<IconFile2 />}
          ></InfoCard>
          <InfoCard
            className="blueBorder"
            title="Мед. комисиия"
            icon={<IconFile3 />}
          ></InfoCard>
          <InfoCard
            className="blueBorder"
            title="Заключить контракт"
            icon={<IconFile4 />}
          ></InfoCard>
        </div>
      </ContainerFlex>
    </div>
  );
};
