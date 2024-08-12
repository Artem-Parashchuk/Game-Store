import s from './HomePage.module.css'
import { GAMES } from '../../assets/db'
import { GameItem } from '../../components/GameItem/GameItem'

export const HomePage = () => {
  return (
    <ul className={s.home_page}>
      {
        GAMES.map(game => {
          return <GameItem key={game.id} game={game}/>
        })
      }
    </ul>
  )
}
