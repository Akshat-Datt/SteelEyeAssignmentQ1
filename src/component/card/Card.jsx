import styles from "./Card.module.css";

const Card = ({ cardData, title}) => {
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => {
        if(typeof v !== "string") return null
       return <div className={styles.cell} key={k}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      })}
    </div>
  );
};

export default Card;
