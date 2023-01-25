import './App.css';
import Header from './components/Header/Header.js';
import { Route, Switch } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
