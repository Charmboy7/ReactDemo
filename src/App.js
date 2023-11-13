import logo from './logo.svg';
import './App.css';
import Fetch from './components/CRUD/Fetch';
import InsertData from './components/CRUD/InsertData';
import Edit from './components/CRUD/Edit';
import ImageTestComp from './components/CRUD/Test Folder/ImageTestComp';
import DateTestComp from './components/CRUD/Test Folder/DateTestComp';
import NavComp from './components/CRUD/Test Folder/NavComp';
import LoginComp from './components/CRUD/Login/loginComp';
import { BrowserRouter as Router } from 'react-router-dom';
import MainComp from './components/CRUD/MainComp';

function App() {
  return (
    <div className="App">
      
      <h1>App Component Works</h1>
      <MainComp></MainComp>
      {/* <LoginComp></LoginComp> */}
      {/* <NavComp></NavComp> */}
      {/* <DateTestComp></DateTestComp> */}
      {/* <ImageTestComp></ImageTestComp> */}
      {/* <Fetch></Fetch>  */}
      {/* <Edit></Edit> */}
      {/* <InsertData></InsertData> */}
    </div>
  );
}

export default App;
