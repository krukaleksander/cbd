import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Offer from './components/Offer';
import Contact from './components/Contact';
import AboutCbd from './components/AboutCbd';
import Home from './components/Home';
import Page404 from './components/Page404';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/oferta'>Oferta</Link>
                </li>
                <li>
                  <Link to='/cbd'>O Cbd</Link>
                </li>
                <li>
                  <Link to='kontakt'>Kontakt</Link>
                </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/kontakt'>
              <Contact />
            </Route>
            <Route path='/cbd'>
              <AboutCbd />
            </Route>
            <Route path='/oferta'>
              <Offer />
            </Route>            
            <Route path='/'>
              <Home />
            </Route> 
            <Route path="*">
            <Page404/>
            </Route>                      
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
