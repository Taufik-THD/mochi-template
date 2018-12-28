import m from 'mithril'
import marked from 'marked'
import Message from 'static/About.md'

import Layout from 'components/Layout'

export default class About {
  view() {
    return (
      <Layout>
        {m.trust(marked(Message))}
      </Layout>
    )
  }
}