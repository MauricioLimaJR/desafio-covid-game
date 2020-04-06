import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Custom Components
import DefaultCanvas from './pages/components/DefaultCanvas'
import Landing from './pages/landing/index'
import Gameboard from './pages/gameboard/index'

function App() {
  return (
    // REACT ROUTER DOM ROOT
    <DefaultCanvas className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/jogar' component={Gameboard} />
          {/* <Route path='/' component={NoMatchPage} /> */}
        </Switch>
      </BrowserRouter>
    </DefaultCanvas>
  )
}

export default App
