import { NavLink } from "react-router-dom"
import style from './NavBar.module.css'
import { useAuthValue } from "../../context/AuthContext"
import { auth } from "../../firebase/firebase-config";
import { useAuthentication } from "../../hooks/useAuthentication"


const NavBar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication();

  console.log(user)

  return (
    <nav className={style.container}>
      <NavLink to='/home'>
      <img className={style.image} src="/Designer.jpeg" alt="" />
      </NavLink>
      <div >
        <NavLink className={style.links} to='/home'>Home</NavLink>
        {!user && 
        <>
          <NavLink className={style.links} to='/login'>Entrar</NavLink>
          <NavLink className={style.links} to='/register'>Criar conta</NavLink>
        </>}
        {user && 
        <>
          <NavLink className={style.links} to='/createpost'>Postar</NavLink>
          <NavLink className={style.links} to='/dashboard'>Dashboard</NavLink>
        </>}
        <NavLink className={style.links} to='/about'>Sobre</NavLink>
        { user ? <button onClick={() => logout()} >Sair</button> : '' }
      </div>
    </nav>
  )
}

export default NavBar