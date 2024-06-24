import { useState } from "react"
import Card from "./Card"
import { useEffect } from "react"
import games from "../games.json"

const Cards = () => {
  return (
    <div className="grid grid-cols-qu gap-4 p-4 bg-black">
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  )
}

export default Cards
