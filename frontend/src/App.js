import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Report from './components/Report';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/report' element={<Report/>} />
      </Routes>
    </div>
  );
}

export default App;
