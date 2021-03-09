import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ReactLevel1 from './pages/ReactLevel1'
import ReactLevel2 from './pages/ReactLevel2'

import './assets/themes/soft-design-system.css'
import './main.css'

const App = () => {
  return (
    <HashRouter>
      <NavBar/>
      <main className='container pt-5'>
        <Switch>
          <Route path='/react-level-1' component={ReactLevel1}/>
          <Route path='/react-level-2' component={ReactLevel2}/>
          <Route path='/' component={Home}/>
        </Switch>
      </main>
      <Footer/>
    </HashRouter>
  )
}

export default App