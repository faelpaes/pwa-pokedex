import Nullstack from 'nullstack'
import PokeCard from './components/PokeCard'
import NumberSort from './icons/NumberSort'
import PokeballIcon from './icons/PokeballIcon'

class Home extends Nullstack {
  pokeList = []

  launch({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  async hydrate({ _db }) {
    this.pokeList = await _db.pokemon.orderBy('number').toArray()
  }

  renderHeader() {
    return (
      <header class="flex gap-4">
        <PokeballIcon />
        <h1 class="text-2xl font-bold">Pokédex</h1>
        <span class="ml-auto cursor-pointer">
          <NumberSort />
        </span>
      </header>
    )
  }

  renderSearchBar() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search pokemon"
          class="w-full rounded-lg border border-gray-300 p-2"
        />
      </div>
    )
  }

  async onFavItem({ _db, number }) {
    const task = await _db.pokemon.get({ number: number })
    console.log(`Pokemon ${number}`)
  }

  renderPokeList() {
    return (
      <div class="flex flex-wrap justify-between gap-2">
        {this.pokeList.map((pokeData) => (
          <PokeCard pokeData={pokeData} onFavItem={this.onFavItem} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-3 px-4 py-5">
        <Header />
        <SearchBar />
        <PokeList />
      </section>
    )
  }
}

export default Home
