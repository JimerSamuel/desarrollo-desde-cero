import React from "react";
import styles from "../..//styles/Page.module.scss";

const MiPagina: React.FC = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${styles.background}`}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Desarrollo desde Cero</h1>
        <p className={styles.text}>
          Esta es una página con estilos utilizando Tailwind CSS en Next.js y
          SASS.
        </p>
        <button className={styles.button}>Mi Botón</button>
      </div>
    </div>
  );
};

export default MiPagina;
