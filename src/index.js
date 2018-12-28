import m from 'mithril'
import r from 'mithril-history-router'

import 'mochi-bootstrap'
import 'assets/main.scss'

import Home from 'pages/Home'
import About from 'pages/About'

r.router(document.body, '/', {
  '/': Home,
  '/about': About
})
