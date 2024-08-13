import { useSelector } from "react-redux";
import s from "./OrderPage.module.css";
import { totalPrice } from "../../assets/utils";
import { OrderItem } from "../../components/OrderItem/OrderItem";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.gamesInCart) || [];

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className={s.order}>
      <div className={s.order_left}>
        {items.map((game) => (
          <OrderItem key={game.id} game={game} />
        ))}
      </div>

      <div className={s.order_right}>
        <div className={s.total_price}>
          <span>
            {items.length} товарів на суму {totalPrice(items)} UAH
          </span>
        </div>
      </div>
    </div>
  );
};
