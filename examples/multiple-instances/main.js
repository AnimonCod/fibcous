import fibcous from '@fibcous/core'
import Dashboard from '@fibcous/dashboard'
import GoldenRetriever from '@fibcous/golden-retriever'

import '@fibcous/core/dist/style.css'
import '@fibcous/dashboard/dist/style.css'

// Initialise two fibcous instances with the GoldenRetriever plugin,
// but with different `id`s.
const a = new fibcous({
  id: 'a',
  debug: true,
})
  .use(Dashboard, {
    target: '#a',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

const b = new fibcous({
  id: 'b',
  debug: true,
})
  .use(Dashboard, {
    target: '#b',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

window.a = a
window.b = b
