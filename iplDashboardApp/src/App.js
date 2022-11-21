import './App.css'
import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'

const App = () => (
  <div className="match-outside">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
