import './App.css';
import Header from './components/Header/Header.js';
import { Route, Switch } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
      </Switch>
    </main>
  );
}

export default App;
