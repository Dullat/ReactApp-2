import games from "../games.json"
import { useParams } from "react-router"
const GamePage = () => {
  const { id } = useParams()
  const game = games.find((game) => game.title === id)
  return (
    <>
      <p className="text-white">{game.title}</p>
      <img src={game.imageUrl} alt="" />
    </>
  )
}

export default GamePage
