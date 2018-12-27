import m from 'mithril'


import Home from './pages/home'
import About from './pages/about'
m.route.mode = 'pathname'
m.route(document.body, '/', {
  '/': Home,
  '/about': About
})