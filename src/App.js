import Home from './page/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import StudentList from './page/StudentList';
import Edit from './page/Edit';


function App() {
  return (
    <Router>
      <div>
           <Routes>                   
               <Route path="/" element={<Home/>}/>
            </Routes>                      
            <Routes>                   
               <Route path="/list" element={<StudentList/>}/>
            </Routes>        
            <Routes>                   
               <Route path="/edit" element={<Edit/>}/>
            </Routes>             
      </div>
    </Router>
  );
}
export default App;
