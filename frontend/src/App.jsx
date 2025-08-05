import {BrowserRouter, Routes, Route} from 'react-router-dom'

// page and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import LoginUser from './pages/LoginUser';
import RegisterUser from './pages/RegisterUser';
import WorkoutsForm from './components/WorkoutsForm';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/login' element={<LoginUser />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/addWorkout' element={<WorkoutsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
