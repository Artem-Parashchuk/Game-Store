import { TiDeleteOutline } from "react-icons/ti";
import s from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { deleteGameFromCart } from "../../redux/cart/reducer";

export const CartItem = ({ price, title, id }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteGameFromCart(id))
  }
  return (
    <>
      <li className={s.cart_item}>
        <p className={s.title_game}>{title}</p>
        <span className={s.price_game}>{price} UAH</span>
        <TiDeleteOutline
          size={25}
          className={s.delete_icon}
          onClick={handleClick}
        />
      </li>
    </>
  );
};
