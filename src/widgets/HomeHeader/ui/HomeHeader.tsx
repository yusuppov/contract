import "../../../feature/utils.css";
import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";

import styles from "./HomeHeader.module.css";
import Icon from "../../../shared/assets/img/shield.svg";
import { Button } from "../../../shared/Components/Button";
import { Card } from "../../../shared/Components/Card/ui";

export const HomeHeader = () => {
  const handleScroll = (k: number) => {
    const arr = ["info", "reward", "backpack", "items", "branch", "conditions"];
    document
      .getElementById(arr[k])
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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
      <ContainerFlex>
        <div className={styles.cardsBox}>
          <Card
            color="violet"
            text="Этапы подписания"
            onClick={() => handleScroll(0)}
          />
          <Card
            color="turq"
            text="Денежные выплаты"
            onClick={() => handleScroll(1)}
          />
          <Card
            color="yellow"
            text="Льготы и гарантии"
            onClick={() => handleScroll(2)}
          />
          <Card
            color="red"
            text="Специальности"
            onClick={() => handleScroll(4)}
          />
          <Card
            color="green"
            text="Частые вопросы"
            onClick={() => handleScroll(3)}
          />
          <Card
            color="blue"
            text="Условия контракта"
            onClick={() => handleScroll(5)}
          />
        </div>
      </ContainerFlex>
    </div>
  );
};
