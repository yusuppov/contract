import styles from "./HomeBackpack.module.css";

import { Text } from "../../../shared/Components/Text";
import { InfoCard } from "../../InfoCard";

export const HomeBackpack = () => {
  return (
    <div>
      <div className={styles.backpackImg}>
        <Text variant="h2">Социальные льготы и гарантии</Text>
      </div>
      <div className={styles.backpackInfo}>
        <InfoCard title="Контрактнику">
          <ul className={styles.backpackUl}>
            <li className="smallTurqCircle">
              <Text variant="h4">
                Возможность приобрести жильё за счёт Минобороны через
                накопительно-ипотечную систему
              </Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">Служебное жильё или компенсация за наём</Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">
                Бесплатное обследование, лечение и реабилитация в
                военно-медицинских учреждениях
              </Text>
            </li>
            <li className="smallTurqCircle">
              {" "}
              <Text variant="h4">Страхование жизни и здоровья</Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">
                Двухнедельный оплачиваемый отпуск не реже 1 раза в полгода
              </Text>
            </li>
            <li className="smallTurqCircle">
              <Text variant="h4">Военная пенсия после 20 лет службы</Text>
            </li>
            <li className="smallTurqCircle">
              {" "}
              <Text variant="h4">Региональные меры поддержки</Text>
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
