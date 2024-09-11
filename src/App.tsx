import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/footer'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const [user,setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user)

    })
  },[auth])

  if(loadingUser){
    return<div className='loading'><p>carregando...</p></div>
  }

  return (
    <>
      <AuthProvider value={{user}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/home'/>}/>
          <Route path='/register' element={!user ? <Register/> : <Navigate to='/home' />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/createpost' element={user ? <CreatePost/> : <Navigate to='/login'/>}/>
          <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login'/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
