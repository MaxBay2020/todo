import NavBar from './components/NavBar'
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import TodoDetail from "./pages/TodoDetail";
import {Navigate} from 'react-router-dom'
import {useState} from "react";

function App() {

    const [isLogged, setIsLogged] = useState(false);

    return (
      <Router>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/todos' element={isLogged ? <TodoList /> : <Navigate to='/' />} />

              <Route path='/counter' element={<Counter />} />
              <Route path='/todos/:todoId' element={<TodoDetail />} />
          </Routes>
      </Router>

  );
}

export default App;
