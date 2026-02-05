import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";

import styles from "./Conditions.module.css";

export const Conditions = () => {
  return (
    <ContainerFlex>
      <div className={styles.conditionsWrapper}>
        <Text variant="h2">Условия заключения контракта на СВО</Text>
        <InfoCard className={styles.cardGap}>
          <ol className={styles.conditionsCard}>
            <li>
              <Text variant="h4">Трансфер из любой точки России</Text>
            </li>
            <li>
              <Text variant="h4">Встреча прибывающих на вокзале</Text>
            </li>
            <li>
              <Text variant="h4">
                Предоставление жилья на период оформления
              </Text>
            </li>
            <li>
              <Text variant="h4">Перевозка до сборного пункта</Text>
            </li>
            <li>
              <Text variant="h4">Медицинская комиссия на сборном пункте</Text>
            </li>
            <li>
              <Text variant="h4">Трансфер в войсковую часть</Text>
            </li>
            <li>
              <Text variant="h4">Обеспечение проживанием и питанием</Text>
            </li>
            <li>
              <Text variant="h4">Оснащение современной экипировкой</Text>
            </li>
            <li>
              <Text variant="h4">
                Профессиональная общевойсковая подготовка под руководством
                опытных инструкторов
              </Text>
            </li>
          </ol>
        </InfoCard>
      </div>
    </ContainerFlex>
  );
};
