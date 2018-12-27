import m from 'mithril'
import marked from 'marked'
import Hello from 'static/hello.md'

import Layout from 'components/Layout'

export default class Home {
  view() {
    return (
      <Layout>
        <h1 class="green">Page Home</h1>
        {m.trust(marked(Hello))}
        <a href="#!/about">Page About</a>
      </Layout>
    )
  }
}