//import Ani from "../src/Components/anima"
//import Ta from '../src/Table Js/FetchAPI'
import './App.css';
import Emp from '../src/Json Ins/EmpLis'
import EmpCreate from '../src/Json Ins/EmpCreate'
import EmpDetail from '../src/Json Ins/EmpDetail'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
 <Router>
  
  <Routes>
         <Route path='/' element={<Emp/>}></Route>

          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
    </Routes> 
  </Router>     
   </>
  );
}

export default App;
