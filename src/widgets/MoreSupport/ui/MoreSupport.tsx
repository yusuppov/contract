import clsx from "clsx";
import "../../../feature/utils.css";
import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";
import { Button } from "../../../shared/Components/Button";
import { InfoCard } from "../../InfoCard";
import styles from "../ui/MoreSupport.module.css";
import Icon from "../../../shared/assets/img/blank.svg";
import Icon1 from "../../../shared/assets/icons/More-1svg.svg";
import Icon2 from "../../../shared/assets/icons/More-2.svg";
import Icon3 from "../../../shared/assets/icons/More-3.svg";
import Icon4 from "../../../shared/assets/icons/More-4.svg";
import Icon5 from "../../../shared/assets/icons/More-5.svg";
import Icon6 from "../../../shared/assets/icons/more-6.svg";

export const MoreSupport = () => {
  return (
    <ContainerFlex>
      <div className={styles.containerWrapper}>
        <div className={clsx(styles.containerFlex, "mb32")}>
          <Text as="h2" variant="h2">
            Дополнительные меры поддержки участников СВО
          </Text>
          <Icon />
        </div>
        <div className={clsx(styles.moreSupportGrid)}>
          <InfoCard icon={<Icon1 />}>
            <Text variant="h3">
              Статус ветерана боевых действий и соответствующие ему льготы
            </Text>
          </InfoCard>
          <InfoCard icon={<Icon2 />}>
            <Text variant="h3">
              Дополнительные выплаты, льготы — в зависимости от регион
            </Text>
          </InfoCard>
          <InfoCard icon={<Icon3 />}>
            <Text variant="h3">Бюджетные места для обучения детей в вузах</Text>
          </InfoCard>
          <InfoCard icon={<Icon4 />}>
            <Text variant="h3">
              Бесплатный отдых детей в летних оздоровительных лагерях
            </Text>
          </InfoCard>
          <InfoCard icon={<Icon5 />}>
            <Text variant="h3">Льготы при оплате ЖКУ</Text>
          </InfoCard>
          <InfoCard icon={<Icon6 />}>
            <Text variant="h3">Кредитные и налоговые каникулы</Text>
          </InfoCard>
        </div>
        <div className={styles.moreButton}>
          <Button text="Записаться на военную службу" className="w400" />
        </div>
      </div>
    </ContainerFlex>
  );
};
