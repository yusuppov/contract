import styles from "./HomePage.module.css";

import { ContainerFlex } from "../../../widgets/ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { Card } from "../../../shared/Components/Card/ui";
import { InfoCard } from "../../../widgets/InfoCard";
import Icon from "../../../shared/assets/icons/personIcon.svg";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.header}>
        <ContainerFlex>
          <div>
            <Text as="p">Как дела</Text>
            <Card color="green" text="Частые вопросы"></Card>
          </div>
          <div>12312</div>
        </ContainerFlex>
        <InfoCard
          btnText="Подать заявление"
          title="Гражданину РФ"
          mainText="На Госуслугах, в пункте отбора или военном комиссариате"
          circleColor="green"
          icon={<Icon />}
        ></InfoCard>
      </div>
      <div className={styles.main}></div>
    </div>
  );
};
