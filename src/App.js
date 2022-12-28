import './components/style.css'
import Main from './components/Main';
import Attribution from './components/Attribution';
import { Store } from '../src/reduxToolkit/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Main></Main>
      <Attribution />
    </Provider>
  );
}

export default App;
