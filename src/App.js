import './App.css';
import LandingHeader from './Components/Header/Landing-Header'
import routes from './routes'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
