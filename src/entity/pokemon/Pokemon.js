import Nullstack from 'nullstack'

class Pokemon extends Nullstack {
  constructor(number, name, sprite, type, isFavorite) {
    super()
    this.number = number
    this.name = name
    this.sprite = sprite
    this.type = type
    this.isFavorite = isFavorite
  }
}

export default Pokemon
