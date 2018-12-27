import m from 'mithril'

import 'mochi-bootstrap'
import 'assets/main.scss'

import Home from 'pages/Home'
import About from 'pages/About'

m.route(document.body, '/', {
  '/': Home,
  '/about': About
})