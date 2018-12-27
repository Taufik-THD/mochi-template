import m from 'mithril'
import marked from 'marked'
import Welcome from 'static/Welcome.md'

import Layout from 'components/Layout'

export default class Home {
  view() {
    return (
      <Layout>
        {m.trust(marked(Welcome))}
      </Layout>
    )
  }
}