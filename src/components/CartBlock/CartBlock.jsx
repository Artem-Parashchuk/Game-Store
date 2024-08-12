import { BsCart3 } from "react-icons/bs";

import s from "./CartBlock.module.css";

export const CartBlock = () => {
  return (
    <div className={s.cart}>
      <div className={s.wrapper_icon}>
        <BsCart3
          size={25}
          className={s.cart_icon}
        />
      </div>
      <span className={s.cart_total_price}>100 грн</span>
    </div>
  );
};
