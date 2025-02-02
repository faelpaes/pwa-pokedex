import Nullstack from 'nullstack'
import Home from './Home'
import Offline from './Offline'

import '../tailwind.css'

class Application extends Nullstack {
  prepare({ page }) {
    page.title = 'Pokédex First Generation'
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render({ worker }) {
    return (
      <main data-loading={worker.fetching}>
        {worker.responsive ? (
          <body class="bg-white font-poppins text-darkgray">
            <Head />
            <Home route="/" persistent />
          </body>
        ) : (
          <Offline route="*" />
        )}
      </main>
    )
  }
}

export default Application
