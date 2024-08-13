import { BsCart3 } from "react-icons/bs";

import s from "./CartBlock.module.css";
import { useSelector } from "react-redux";
import { totalPrice } from "../../assets/utils";
import { CartMenu } from "../CartMenu/CartMenu";
import { useState } from "react";
import { ItemInCart } from "../ItemInCart/ItemInCart";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const games = useSelector((state) => state.cart.gamesInCart);
  const resTotalPrice = totalPrice(games);
  const navigate = useNavigate()

const handleClick = () => {
  setIsCartVisible(false)
  navigate('/order')
}

  return (
    <div className={s.cart}>
      <div className={s.wrapper_icon}>
        <ItemInCart quantity={games.length}/>
        <BsCart3
          size={25}
          className={s.cart_icon}
          onClick={() => setIsCartVisible(!isCartVisible)}
        />
      </div>

      {resTotalPrice > 0 ? (
        <span className={s.cart_total_price}>{resTotalPrice} UAH</span>
      ) : null}

      {isCartVisible && (
        <CartMenu
          items={games}
          onClick={handleClick}
        />
      )}
    </div>
  );
};
