import s from "./ItemInCart.module.css";

export const ItemInCart = ({ quantity = 0 }) => {
  return (
    <>
      {quantity > 0 ? (
        <span className={s.count_quantity}>{quantity}</span>
      ) : null}
    </>
  );
};
