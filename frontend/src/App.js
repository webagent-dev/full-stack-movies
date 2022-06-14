import { useContext } from 'react'
import './App.css';
import Container from './page/Container'
import Watch from './page/Watch'
import Login  from './page/login/Login'
import Register from './page/register/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/authContext/AuthContext'
function App() {
  const {data}  = useContext(AuthContext)
  // console.log(data)
  // const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={data ? <Container /> :  <Navigate to='/register' replace/>} />
        <Route path='/movies' element={data ? <Container type='movies' /> :  <Navigate to='/register' replace/>} />
        <Route path='/series' element={data ? <Container type='series' /> :  <Navigate to='/register' replace/>} />
        <Route path='/watch' element={data ? <Watch /> :  <Navigate to='/register' replace/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register /> }/>
      </Routes>
    </div>
  );
}

export default App;
