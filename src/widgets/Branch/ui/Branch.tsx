import TankImg from "../../../shared/assets/img/tank.jpg";
import ArtirImg from "../../../shared/assets/img/artir.jpg";
import ShturImg from "../../../shared/assets/img/shturm.jpg";
import DriverImg from "../../../shared/assets/img/driver.jpg";
import SaperImg from "../../../shared/assets/img/saper.jpg";
import BplaImg from "../../../shared/assets/img/bpla.jpg";

import styles from "./Branch.module.css";
import { CardImg } from "../../../shared/Components/CardImg";
import { ContainerFlex } from "../../ContainerFlex";
import { Text } from "../../../shared/Components/Text";

export const Branch = () => {
  return (
    <ContainerFlex>
      <div className={styles.branchWrapper}>
        <Text variant="h2">Специальности</Text>
        <div className={styles.branchGrid}>
          <CardImg title="Танкист" bgImg={TankImg}></CardImg>
          <CardImg title="Артиллерист" bgImg={ArtirImg}></CardImg>
          <CardImg title="Штурмовик" bgImg={ShturImg}></CardImg>
          <CardImg title="Водитель" bgImg={DriverImg}></CardImg>
          <CardImg title="Сапер" bgImg={SaperImg}></CardImg>
          <CardImg title="БПЛА" bgImg={BplaImg}></CardImg>
        </div>
      </div>
    </ContainerFlex>
  );
};
