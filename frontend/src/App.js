
import './App.css';
import Container from './page/Container'
import Watch from './page/Watch'
import Register  from './page/register/Register'
import Login from './page/login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
const user = true
function App() {
  // const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <Container /> :  <Navigate to='/register' replace/>} />
        <Route path='/movies' element={user ? <Container type='movies' /> :  <Navigate to='/register' replace/>} />
        <Route path='/series' element={user ? <Container type='series' /> :  <Navigate to='/register' replace/>} />
        <Route path='/watch' element={user ? <Watch /> :  <Navigate to='/register' replace/>} />
        <Route path='/login' element={<Register />} />
        <Route path='/register' element={<Login /> }/>
      </Routes>
    </div>
  );
}

export default App;
