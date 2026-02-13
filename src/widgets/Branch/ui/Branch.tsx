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
          <CardImg position={30} title="Танкист" bgImg={TankImg}></CardImg>
          <CardImg position={40} title="Артиллерист" bgImg={ArtirImg}></CardImg>
          <CardImg position={40} title="Штурмовик" bgImg={ShturImg}></CardImg>
          <CardImg position={60} title="Водитель" bgImg={DriverImg}></CardImg>
          <CardImg position={20} title="Сапер" bgImg={SaperImg}></CardImg>
          <CardImg position={40} title="БПЛА" bgImg={BplaImg}></CardImg>
        </div>
      </div>
    </ContainerFlex>
  );
};
