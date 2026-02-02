import styles from "./HomePage.module.css";

import { ContainerFlex } from "../../../widgets/ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { Card } from "../../../shared/Components/Card/ui";

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
      </div>
      <div className={styles.main}></div>
    </div>
  );
};
