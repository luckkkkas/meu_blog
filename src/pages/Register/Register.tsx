import { useState } from 'react';
import style from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [wrongpass,setWrogpass] = useState(false);

  function verify(e: any){
    e.preventDefault()
    if(pass !== rePass){
      setWrogpass(true);
      return
    }
    setWrogpass(false);
  
  }
  
  return (
    
    <div >
      {wrongpass && <p className={style.wrong}>as senhas não são iguais</p>}
      <form onSubmit={verify} className={style.container}> 
        <label className={style.inputContainer}>
          <span>Nome:</span>
          <input className={style.input} type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label className={style.inputContainer}>
          <span>email:</span>
          <input className={style.input} type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className={style.inputContainer}>
          <span>Senha:</span>
          <input className={style.input} type="password" required value={pass} onChange={(e)=>setPass(e.target.value)} />
        </label>
        <label className={style.inputContainer}>
          <span>Repita a senha:</span>
          <input type="password" className={style.input} required value={rePass} onChange={(e)=>setRePass(e.target.value)} />
        </label>
          <div>
            <input type="submit" className={style.button} value={'cadastrar'}/>
          </div>
      </form>
    </div>
  )
}

export default Register