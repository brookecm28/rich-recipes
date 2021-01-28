import './App.css';
import routes from './routes'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../src/Redux/Store'
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router></Provider>
  );
}

export default App;
