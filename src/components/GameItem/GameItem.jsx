import { GameBuy } from "../GameBuy/GameBuy";
import { GameGenre } from "../GameGenre/GameGenre";
import s from "./GameItem.module.css";

export const GameItem = ({ game }) => {
  return (
    <li className={s.game_item}>
      <div className={s.game_img_wrapper}>
        <img
          src={game.image}
          alt={`Game ${game.title}`}
          className={s.game_img}
        />
      </div>
      <div className={s.game_details}>
        <h3 className={s.game_title}>{game.title}</h3>
        <ul className={s.game_genre}>
          {game.genres.map((genre) => {
            return (
              <GameGenre
                key={genre}
                genre={genre}
              />
            );
          })}
        </ul>
        <GameBuy game={game}/>
      </div>
    </li>
  );
};
