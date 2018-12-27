import m from 'mithril'

import Home from './pages/home'
import About from './pages/about'

m.route(document.body, "/home", {
  "/home": Home,
  "/about": About
})