import './App.css';
import {Route,Routes} from "react-router-dom"
import Homepage from './component/Homepage';
import Todo from './component/Todo/Todo';
import Register from './component/Auth/Register';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/todo' element={<Todo/>}/>
     </Routes>
    </div>
  );
}

export default App;
