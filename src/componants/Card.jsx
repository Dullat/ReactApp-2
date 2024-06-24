import { Link } from "react-router-dom"

const Card = ({ game }) => {
  return (
    <Link
      to={`/game/${game.title}`}
      className="flex flex-col gap-4 hover:bg-slate-900 hover:cursor-pointer rounded-lg"
    >
      <div
        className="w-full aspect-[2/3] bg-slate-800 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${game.imageUrl})` }}
      ></div>
      <div className="flex flex-col gap-3 justify-start text-white">
        <small className="bg-slate-500 rounded-md w-fit px-2 py-1 text-xs">
          BEST GAME
        </small>
        <div>{game.title}</div>
        <div className="flex gap-3 items-center">
          <button className="px-2 py-1 bg-cyan-700 rounded-md">
            {game.off}
          </button>
          <div className="line-through">{game.originalPrice}</div>
          <div>{game.newPrice}</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
