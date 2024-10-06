import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SignInPage from './pages/signIn'
import Account from './pages/account'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/session/new" element={<SignInPage/>}/>
            <Route path="/:username" element={<Account />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
