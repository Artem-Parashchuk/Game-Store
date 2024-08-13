import s from "./CartItem.module.css";

export const CartItem = ({ price, title, id }) => {
  return (
    <>
      <li className={s.cart_item}>
        <p className={s.title_game}>{title}</p>
        <span className={s.price_game}>{price} UAH</span>
      </li>
    </>
  );
};
