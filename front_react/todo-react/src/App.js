import { Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import Todo from './Todoo';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/todo' element={<Todo/>} />
      </Routes>
    </div>
  );
}

export default App;