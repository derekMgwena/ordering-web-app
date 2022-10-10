import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            COFFEASIDAR AN AFRICAN ORIGINAL COFFEE! SKILLFULLY ROASTED, ARTIFULLY BLENDED.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Demeter Road #304.
            <br /> BedworthPark, 85022
            <br /> (067) 191-1856
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> vanderbijlPark, 85022
            <br /> (071) 130-4048
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Pretoria, 85022
            <br /> (079) 320-0299
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewCastle, 85022
            <br /> (076) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 07:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 – 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
