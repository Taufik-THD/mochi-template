import m from 'mithril'

export default class Navbar {
  view() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">Mochi</a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/mochijs">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}