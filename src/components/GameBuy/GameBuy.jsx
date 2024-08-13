import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import s from "./GameBuy.module.css";
import { deleteGameFromCart, setGameInCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.gamesInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteGameFromCart(game.id));
    } else {
      dispatch(setGameInCart(game));
    }
  };

  return (
    <div className={s.game_buy}>
      <span className={s.game_buy_price}>{game.price} UAH</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Видалити з корзини" : "В Корзину"}
      </Button>
    </div>
  );
};
