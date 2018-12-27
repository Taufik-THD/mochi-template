import m from 'mithril'
import convert from 'html-to-jsx'
import Hello from '../markdown/hello.md'

import './style.scss'

export default class Home {
  view() {
    return (
      <main>
        <h1 class="green">Page Home</h1>
        {convert(Hello)}
        <a href="#!/about">Page About</a>
      </main>
    )
  }
}