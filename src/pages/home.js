import m from 'mithril'

import Hello from '../markdown/hello.md'

export default class Home {
  view() {
    return (
      <main>
        <h1>Page Home</h1>
        <p>{Hello}</p>
        <a href="#!/about">Page About</a>
      </main>
    )
  }
}