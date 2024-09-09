import { NavLink } from "react-router-dom"
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={style.container}>
      <NavLink to='/home'>
      Logo
      </NavLink>
      <div >
        <NavLink className={style.links} to='/home'>Home</NavLink>
        <NavLink className={style.links} to='/login'>Entrar</NavLink>
        <NavLink className={style.links} to='/register'>Criar conta</NavLink>
        <NavLink className={style.links} to='/about'>Sobre</NavLink>
      </div>
    </nav>
  )
}

export default NavBar