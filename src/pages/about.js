import m from 'mithril'
import marked from 'marked'
import About from 'static/About.md'

import Layout from 'components/Layout'

export default class Home {
  view() {
    return (
      <Layout>
        {m.trust(marked(About))}
      </Layout>
    )
  }
}