import { useState } from "react";
import styles from "./ProductCard.module.css";

type Props = {
  title: string;
  price: number;
  img: string;
};

export const ProductCard = ({ title, price, img }: Props) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.image} />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{price} ₽ / шт.</p>

        {/* ЕСЛИ 0 → кнопка */}
        {count === 0 ? (
          <button onClick={increase} className={styles.button}>
            Заказать
          </button>
        ) : (
          <div className={styles.counter}>
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>

            <div className={styles.total}>
              {count * price} ₽
            </div>
          </div>
        )}
      </div>
    </div>
  );
};