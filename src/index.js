import { Router } from 'mochi-router'

import 'mochi-bootstrap'
import 'assets/main.scss'

import Home from 'pages/Home'
import About from 'pages/About'

new Router('/', {
  '/': Home,
  '/about': About
})