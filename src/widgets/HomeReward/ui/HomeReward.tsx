import "../../../feature/utils.css";
import clsx from "clsx";
import styles from "./HomeReward.module.css";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";

import { ContainerFlex } from "../../ContainerFlex";
import { Button } from "../../../shared/Components/Button";

export const HomeReward = () => {
  return (
    <ContainerFlex>
      <div className={styles.containerReward} id="reward">
        <Text className="mb40 textAlign" variant="h2">
          Денежные выплаты
        </Text>
        <InfoCard
          className="turqCircle pl72 "
          title="
Единоразово"
        >
          <ul className={clsx(styles.rewardUl, "pl20")}>
            <li className="smallTurqCircle">
              <Text variant="h4">
                400 000 ₽ — при заключении контракта о прохождении военной
                службы для выполнения задач специальной военной операции (СВО)
                на срок не менее 1 года
              </Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">
                Выплаты от регионов. Размер определяется региональными властями
              </Text>
            </li>
          </ul>
        </InfoCard>
        <InfoCard
          className="turqCircle pl72"
          title="
Для участников СВО"
        >
          <ul className={clsx(styles.rewardUl)}>
            <li>
              <Text variant="h4">
                Денежное довольствие в соответствии с воинским званием и
                должностью. Минимальные суммы в месяц:
              </Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">210 000 ₽ — стрелок (рядовой)</Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">238 000 ₽ — командир отделения (сержант)</Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">
                250 000 ₽ — заместитель командира взвода — командир отделения
                (сержант)
              </Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">
                3 481 ₽ — ежемесячная доплата для ветеранов боевых действий
              </Text>
            </li>
            <li>
              <Text variant="h3">Дополнительные выплаты</Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">
                8 000 ₽ — за каждый день участия в активных наступательных
                действиях
              </Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">
                50 000 ₽ — за каждый километр продвижения в составе штурмовых
                отрядов
              </Text>
            </li>
            <li className={clsx("smallTurqCircle", "mr20")}>
              <Text variant="h4">
                от 50 000 ₽ — за захват или уничтожение вооружения или военной
                техники противника
              </Text>
            </li>
          </ul>
        </InfoCard>
        <Button className="w227" text="Подать заявление" />
      </div>
    </ContainerFlex>
  );
};
