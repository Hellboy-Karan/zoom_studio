import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { FooterContainer } from './containers/footer';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/about' exact><About /></Route>
          <Route path='/gallery' exact><Gallery /></Route>
          <Route path='/testimonial' exact><Testimonial /></Route>
          <Redirect to='/' />
        </Switch>
      </main>
      <FooterContainer />
    </Router>
  );
}

export default App;