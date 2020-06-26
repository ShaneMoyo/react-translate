import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link
} from 'react-router-dom'; 
import Translate  from './components/translate'; 

const About = () => (
  <section>
    <h1>About</h1>
    <p>This is an app to translate texg in to yoda talk</p>
  </section>
)
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
        </nav>
        <Switch>
          <Route path="/about" render={() => <About/>}/>
          <Route path="/" component={Translate}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
