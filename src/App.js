import logo from './logo.svg';
import './App.css';
import KeyPress from './components/KeyPress';
import Form from './components/Form';
import ManagerHs from './components/ManagerHs';
import FormLienHe from './components/FormLienHe';
import ManagerLib from './components/ManagerLib';
import FormEmail from './components/FormEmail';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
    {/* <KeyPress/> */}
    {/* <Form/> */}
    {/* <ManagerHs/> */}
    {/* <FormLienHe/> */}
    {/* <FormEmail/> */}
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/employee' element={<Employee/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
