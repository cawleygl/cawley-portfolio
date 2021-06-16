import Navigation from "./components/Navigation"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import './App.css';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route export path="/contact" component={Contact} />
        <Route export path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={About} />
      </Switch>
    </>
  );
}

export default App;
