import { useState } from 'react';
import style from './Login.module.css';

const Login = () => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={style.body}>
       <label className={style.inputContainer}>
          <span>email:</span>
          <input className={style.input} type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className={style.inputContainer}>
          <span>Senha:</span>
          <input className={style.input} type="password" required value={pass} onChange={(e)=>setPass(e.target.value)} />
        </label>
    </div>
  )
}

export default Login