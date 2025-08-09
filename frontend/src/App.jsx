import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// page and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WorkoutsForm from './components/WorkoutsForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HeroSection from './pages/HeroSection';

function App() {
  const {user} = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/hero' element={<HeroSection />}/>
          <Route path='/' element={user ? <Home /> : <Navigate to="/login" /> } />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path='/addWorkout' element={<WorkoutsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
