import { Button } from "../Button/Button";
import s from "./GameBuy.module.css";

export const GameBuy = ({ game }) => {
  return (
    <div className={s.game_buy}>
      <span className={s.game_buy_price}>{game.price} UAH</span>

      <Button
        type="primary"
        onClick={() => null}
      >
        В Корзину
      </Button>
    </div>
  );
};
