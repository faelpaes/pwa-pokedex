import { colors } from '../constants/color'
import FavIcon from '../icons/FavIcon'

export default function PokeCard({ pokeData, onFavItem }) {
  const { number, name, type, sprite, is_favorite } = pokeData
  let todoInput = null

  if (is_favorite) {
    todoInput = '<input type="checkbox" checked />'
  } else {
    todoInput = <FavIcon />
  }

  return (
    <figure
      class="flex h-36 w-28 flex-col overflow-hidden rounded-lg border border-water"
      style={`border-color: ${colors[type]}`}
    >
      <div
        class="flex w-full flex-row gap-8 p-2 text-xs"
        style={`color: ${colors[type]}`}
      >
        <span class="h-1 cursor-pointer" onclick={() => onFavItem({ number })}>
          {/* <FavIcon /> */}
          {todoInput}
        </span>

        <span>#{String(number).padStart(3, '0')}</span>
      </div>
      <img
        src={sprite}
        alt=""
        class="aspect-square w-20 self-center"
        loading="lazy"
      />
      <figcaption
        class="mt-auto w-full p-1 text-center text-sm capitalize text-white"
        style={`background-color: ${colors[type]}`}
      >
        {name}
      </figcaption>
    </figure>
  )
}
