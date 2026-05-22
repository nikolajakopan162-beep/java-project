import { useState } from "react";

type Props = {
  title: string;
  price: number;
};

export const ProductCard = ({ title, price }: Props) => {
  const [count, setCount] = useState(0);

return (
  <div>
    <h3>{title}</h3>
    <p>{price} ₽ / шт.</p>

    {count === 0 ? (
      <button onClick={() => setCount(1)}>Заказать</button>
    ) : (
      <div>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Итого: {count * price} ₽</p>
      </div>
    )}
  </div>
);