import { totalPrice } from "../../assets/utils";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import s from "./CartMenu.module.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={s.cart}>
      <ul className={s.cart_list}>
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              price={item.price}
              title={item.title}
              id={item.id}
            />
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </ul>
      {items.length > 0 ? (
        <div className={s.cart_menu_arrange}>
          <div className={s.cart_menu_total}>
            <span>Загалом:</span>
            <span >{totalPrice(items)} UAH</span>
          </div>
          <Button
            type="primary"
            size="m"
            onClick={onClick}
          >
            Оформити замовлення
          </Button>
        </div>
      ) : null}
    </div>
  );
};
