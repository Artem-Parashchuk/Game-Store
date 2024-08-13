import { useSelector } from "react-redux";
import s from "./GamePage.module.css";
import { GameGenre } from "../../components/GameGenre/GameGenre";
import { GameBuy } from "../../components/GameBuy/GameBuy";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className={s.game}>
      <h1 className={s.game_title}>{game.title}</h1>
      <div className={s.game_content}>
        <div className={s.left_side}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video Player"
          ></iframe>
        </div>
        <div className={s.right_side}>
          <div className={s.img_wrapper}>
            <img
              src={game.image}
              alt={`Poster ${game.title}`}
            />
          </div>
          <p className={s.game_description}>{game.description}</p>
          <p className={s.game_subtitle}>Популярні мітки цього продукту:</p>
          <ul className={s.genre_list}>
           {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)} 
          </ul>
          <div className={s.game_buy}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
