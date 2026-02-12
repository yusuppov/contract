import styles from "./HomeBackpack.module.css";
import Icon1 from "../../../shared/assets/icons/backPack-1.svg";
import Icon2 from "../../../shared/assets/icons/backPack-2.svg";
import Icon3 from "../../../shared/assets/icons/backPack-3.svg";
import Icon4 from "../../../shared/assets/icons/backPack-4.svg";
import Icon5 from "../../../shared/assets/icons/backPack-5.svg";
import Icon6 from "../../../shared/assets/icons/backPack-6.svg";
import Icon7 from "../../../shared/assets/icons/backPack-7.svg";
import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";
import { CollapsBlock } from "../../CollapsBlock";

export const HomeBackpack = () => {
  return (
    <div className={styles.backpackWrapper}>
      <div className={styles.backpackImg}>
        <Text variant="h2">Социальные льготы и гарантии</Text>
      </div>
      <div className={styles.backpackInfo}>
        <InfoCard title="Контрактнику">
          <ul className={styles.backpackUl}>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Приобретение жилья через Минобороны"
                variant="caption3"
                icon={<Icon1 />}
              >
                <Text variant="h4">
                  Возможность купить жильё за счёт Министерства обороны через
                  накопительно-ипотечную систему. Надёжный способ улучшить
                  жилищные условия.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Служебное жильё или компенсация за наём"
                variant="caption3"
                icon={<Icon2 />}
              >
                <Text variant="h4">
                  Обеспечение служебным жильём или денежная компенсация для
                  аренды жилья.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="               Бесплатное обследование, лечение и реабилитация"
                variant="caption3"
                icon={<Icon3 />}
              >
                <Text variant="h4">
                  Полный комплекс медицинских услуг в военно-медицинских
                  учреждениях без дополнительных затрат.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Страхование жизни и здоровья"
                variant="caption3"
                icon={<Icon4 />}
              >
                <Text variant="h4">
                  Надёжная защита и финансовая поддержка в случае несчастного
                  случая или болезни.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Двухнедельный оплачиваемый отпуск"
                variant="caption3"
                icon={<Icon5 />}
              >
                <Text variant="h4">
                  Гарантированный отпуск не реже одного раза в полгода с
                  сохранением заработка.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Военная пенсия после 20 лет службы"
                variant="caption3"
                icon={<Icon6 />}
              >
                <Text variant="h4">
                  Надёжное пенсионное обеспечение, которое начинается уже после
                  20 лет службы.{" "}
                </Text>
              </CollapsBlock>
            </li>
            <li>
              {" "}
              <CollapsBlock
                className={styles.blockCollapsBlock}
                title="Региональные меры поддержки"
                variant="caption3"
                icon={<Icon7 />}
              >
                <Text variant="h4">
                  Дополнительные льготы и программы поддержки на уровне
                  субъектов РФ, учитывающие местные особенности.{" "}
                </Text>
              </CollapsBlock>
            </li>
          </ul>
        </InfoCard>
        <InfoCard title="Семье">
          <ul className={styles.backpackUl}>
            <li className="smallTurqCircle">
              <Text variant="h4"> Путёвки в лагеря отдыха для детей</Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">Квоты для обучения детей в вузах</Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">
                {" "}
                Дополнительные меры поддержки — в зависимости от региона
              </Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4"> Региональные меры поддержки</Text>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
};
