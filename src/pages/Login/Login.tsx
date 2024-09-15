import { useState } from 'react';
import style from './Login.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Idata } from '../../hooks/types.ts/type';
import { Link } from 'react-router-dom';

const Login = () => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const { login, error, loading } = useAuthentication();

  const profile = {
    email,
    pass
  }

  const verifyLogin = ( profile:Idata) =>{
    login(profile);
  }
  const controllerLogin = (e) => {
    e.preventDefault();
    verifyLogin(profile);
  }

  return (
    <>
      {error && <p className='wrong'>{error}</p>}
      { loading ? 
        <p className='loading'>Carregando...</p> :
        <form onSubmit={controllerLogin} className={style.body}>
          <label className={style.inputContainer}>
            <span>email:</span>
            <input className={style.input} type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          <label className={style.inputContainer}>
            <span>Senha:</span>
            <input className={style.input} type="password" required value={pass} onChange={(e)=>setPass(e.target.value)} />
          </label>
          <div className={style.butonCon}>
          <Link className={style.createAccount} to={'/register'}>Criar Conta</Link>
          <input className={style.login} type="submit" value='Entrar'/>
          </div>
        </form>  
      }
    </>
  )
}

export default Login