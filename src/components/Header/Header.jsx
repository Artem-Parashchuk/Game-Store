import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { CartBlock } from "../CartBlock/CartBlock";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.title_wrapper}>
        <Link
          to="/"
          className={s.header_title}
        >
          Game Store
        </Link>
      </div>
      <div className={s.cart_wrapper}>
        <CartBlock />
      </div>
    </div>
  );
};
