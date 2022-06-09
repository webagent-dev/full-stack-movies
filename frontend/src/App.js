
import './App.css';
import Container from './page/Container'
import Watch from './page/Watch'
import Register  from './page/register/Register'
import Login from './page/login/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/movies' element={<Container type='movies'/>} />
        <Route path='/series' element={<Container type='series'/>} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/login' element={<Register />} />
        <Route path='/register' element={<Login /> }/>
      </Routes>
    </div>
  );
}

export default App;
