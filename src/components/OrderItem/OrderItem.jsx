import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";

import s from "./OrderItem.module.css";
import { deleteGameFromCart } from "../../redux/cart/reducer";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteGameFromCart(game.id));
  };

  return (
    <div className={s.order_item}>
      <div className={s.img_wrapper}>
        <img
          src={game.image}
          alt={`Poster ${game.title}`}
        />
      </div>
      <div className={s.order_title}>
        <span>{game.title}</span>
      </div>
      <div className={s.order_price}>
        <span>{game.price}</span> UAH
        <TiDeleteOutline
          size={25}
          className={s.delete_icon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
