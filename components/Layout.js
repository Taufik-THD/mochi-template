import m from 'mithril'

import Navbar from './Navbar'
import Footer from './Footer'

export default class Content {
  view(props) {
    return (
      <main>
        <Navbar />
        <article class="container">
          {props.children}
        </article>
        <Footer />
      </main>
    )
  }
}