import User from './components/User'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/user/:login' element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
