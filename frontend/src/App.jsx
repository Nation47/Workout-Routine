import {BrowserRouter, Routes, Route} from 'react-router-dom'

// page and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WorkoutsForm from './components/WorkoutsForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addWorkout' element={<WorkoutsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
