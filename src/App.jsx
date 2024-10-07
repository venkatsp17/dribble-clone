import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SignInPage from './pages/auth/signIn'
import Account from './pages/account'
import SignUpPage from './pages/auth/signUp'
import ProtectedRoute from './routes/protectedroute'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/session/new" element={<SignInPage/>}/>
            <Route path="/signup/new" element={<SignUpPage />} />
            <Route path="/:username" element={<ProtectedRoute element={<Account />}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
