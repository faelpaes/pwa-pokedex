import Nullstack from 'nullstack'

class Offline extends Nullstack {
  render() {
    return (
      <div>
        <h1> You appear to have no connection </h1>
        <p> The page will reload once you go back online. </p>
      </div>
    )
  }
}

export default Offline
