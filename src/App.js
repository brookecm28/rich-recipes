import './App.css';
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../src/Redux/Store'

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <div className="App">
        {routes}
      </div>
    </HashRouter></Provider>
  );
}

export default App;
