import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";
import Icon from "../../../shared/assets/img/document.svg";
import IconMan from "../../../shared/assets/icons/personIcon.svg";
import styles from "./HomeInfo.module.css";
import clsx from "clsx";
import "../../../feature/utils.css";

export const HomeInfo = () => {
  return (
    <div className="mb72">
      <ContainerFlex>
        <Text className={styles.containerTopTitle} variant="h2">
          Как стать военнослужащим по контракту
        </Text>
        <div className={styles.containerTopIcon}>
          <Icon></Icon>
        </div>
      </ContainerFlex>
      <div className={styles.cardsGrid}>
        <InfoCard
          icon={<IconMan />}
          title="Гражданину РФ"
          className={styles.cardGrid1}
          btnText="Подать заявление"
          mainText="На Госуслугах, в пункте отбора или военном комиссариате"
        ></InfoCard>
        <InfoCard
          icon={<IconMan />}
          title="Иностранцу"
          className={styles.cardGrid2}
          btnText="Найти пункт отбора"
          mainText="В пункте отбора или военном комиссариате"
        ></InfoCard>
        <InfoCard className={styles.cardGrid3} mainText="">
          <ol>
            <li className={clsx(styles.cardListLi, "mb16")}>
              <Text variant="h4">
                Подготовьте документы:
                <ul className={styles.listUl}>
                  <li>паспорт</li>
                  <li>военный билет — при наличии</li>
                  <li>свидетельство о браке и рождении детей — при наличии</li>
                  <li>анкету — можно заполнить заранее или в пункте отбора</li>
                </ul>
              </Text>
            </li>
            <li className={clsx(styles.cardListLi, "mb16")}>
              <Text variant="h4">
                Пройдите собеседование с психологом в пункте отбора или военном
                комиссариате
              </Text>
            </li>
            <li className={clsx(styles.cardListLi, "mb16")}>
              <Text variant="h4">
                Пройдите медицинский осмотр в военном комиссариате
              </Text>
            </li>
            <li className={styles.cardListLi}>
              Заключите контракт в пункте отбора или в воинской части
            </li>
          </ol>
        </InfoCard>
      </div>
    </div>
  );
};
