import m from 'mithril'
import marked from 'marked'
import Hello from '../markdown/hello.md'

import 'mochi-bootstrap'

import './style.scss'

export default class Home {
  view() {
    return (
      <main>
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>

        <h1 class="green">Page Home</h1>
        {m.trust(marked(Hello))}
        <a href="#!/about">Page About</a>
      </main>
    )
  }
}