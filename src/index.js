import m from 'mithril'

import 'mochi-bootstrap'
import 'assets/main.scss'

import Home from 'pages/home'
import About from 'pages/about'

m.route(document.body, '/', {
  '/': Home,
  '/about': About
})