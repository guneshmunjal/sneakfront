import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import { Chatpage } from './pages/Chatpage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/'element = {<Homepage/>}/>
      <Route path='/chatpage' element = {<Chatpage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
