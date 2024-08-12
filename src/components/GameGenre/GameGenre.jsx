import s from './GameGenre.module.css'

export const GameGenre = ({ genre }) => {
  return (
    <li
      key={genre}
      className={s.game_genre}
    >
      {genre}
    </li>
  );
};
