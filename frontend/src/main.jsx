import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { WorkoutsContextProvider } from './contexts/WorkoutsContexts';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
          <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
