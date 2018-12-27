import m from 'mithril'
import convert from 'html-to-jsx'

import Hello from '../markdown/hello.md'

export default class Home {
  view() {
    return (
      <main>
        <h1>Page Home</h1>
        {convert(Hello)}
        <a href="#!/about">Page About</a>
      </main>
    )
  }
}