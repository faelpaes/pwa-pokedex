import Nullstack from 'nullstack'
import Dexie from 'dexie'
import Pokemon from './entity/pokemon/Pokemon'

class LocalDatabase extends Nullstack {
  static async start(context) {
    const db = (context._db = new Dexie('pokemonDB'))
    const pokeList = []

    db.version(1).stores({
      pokemon: '++id, number, name, sprite, type',
    })

    this.pokeList = await this.loadPokeData()
    this.pokeList.forEach((poke) => {
      db.on('populate', async () => {
        await db.pokemon.bulkPut([
          {
            number: poke.item.number,
            name: poke.item.name,
            sprite: poke.item.sprite,
            type: poke.item.type,
          },
        ])
      })
    })

    db.open()
  }

  static async fetchPokeData({ pokeNumber }) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`,
    )
    const data = await response.json()
    const pokeItem = new Pokemon(
      data.id,
      data.name,
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`,
      data.types[0].type.name,
    )

    return {
      item: pokeItem,
    }
  }

  static async loadPokeData() {
    const promises = []
    for (let i = 1; i < 152; i++) {
      promises.push(this.fetchPokeData({ pokeNumber: i }))
    }
    return await Promise.all(promises)
  }
}

export default LocalDatabase
