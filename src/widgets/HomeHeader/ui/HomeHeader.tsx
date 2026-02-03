import "../../../feature/utils.css";
import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";

import styles from "./HomeHeader.module.css";
import Icon from "../../../shared/assets/img/shield.svg";
import { Button } from "../../../shared/Components/Button";
import { Card } from "../../../shared/Components/Card/ui";

export const HomeHeader = () => {
  return (
    <div className={styles.homeHeaderWrapper}>
      <ContainerFlex>
        <div className={styles.leftContainer}>
          <Text as="h1" variant="h1">
            Военная служба по контракту
          </Text>
          <Text variant="body1" className="mt24 mb16">
            Требование
          </Text>
          <Text variant="h4" className="mb16">
            Возраст — от 18 лет
          </Text>
          <Text variant="body1" className="mb16">
            Состояние здоровья
          </Text>
          <Text variant="h4" className="mb16">
            Определят на медосмотре в военном комиссариате
          </Text>
          <Text variant="body1" className="mb16">
            Срок контракта
          </Text>
          <Text variant="h4">1 год, 3 года или 5 лет</Text>
        </div>
        <div className={styles.rightContainer}>
          <Icon />
          <Button text="Записаться" />
        </div>
      </ContainerFlex>
      <div className={styles.cardsBox}>
        <Card color="violet" text="Как стать контрактником" />
        <Card color="turq" text="Как стать контрактником" />
        <Card color="yellow" text="Как стать контрактником" />
        <Card color="green" text="Как стать контрактником" />
      </div>
    </div>
  );
};
