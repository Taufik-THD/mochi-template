import m from 'mithril'
import marked from 'marked'
import Hello from '../markdown/hello.md'

import './style.scss'

export default class Home {
  view() {
    return (
      <main>
        <h1 class="green">Page Home</h1>
        {m.trust(marked(Hello))}
        <a href="#!/about">Page About</a>
      </main>
    )
  }
}