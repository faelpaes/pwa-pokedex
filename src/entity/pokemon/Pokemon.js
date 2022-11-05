import Nullstack from 'nullstack'

class Pokemon extends Nullstack {
  constructor(number, name, sprite, type) {
    super()
    this.number = number
    this.name = name
    this.sprite = sprite
    this.type = type
  }
}

export default Pokemon
