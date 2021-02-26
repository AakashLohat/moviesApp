
import './App.css';
import { Provider } from 'react-redux'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import store from './store'
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>

          <Navbar />
          <Landing />

          <Footer />
        </div>

      </Router>
    </Provider>
  );
}

export default App;
