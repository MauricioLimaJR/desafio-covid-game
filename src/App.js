import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Custom Components
import Landing from './pages/landing/index'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        {/* <Route path='/' component={NoMatchPage} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
