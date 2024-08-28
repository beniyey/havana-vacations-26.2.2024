import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './views/auth.js';
import Vacations from './views/vacations.js';

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/vacations' element={<Vacations />} />
        <Route path='/' element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
