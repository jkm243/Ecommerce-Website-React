import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/index.js';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;