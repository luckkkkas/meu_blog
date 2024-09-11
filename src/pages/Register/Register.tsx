import { useState } from 'react';
import style from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [wrongpass,setWrogpass] = useState(false);

  const { createUser, error } = useAuthentication();

  async function verify(e: any){
    e.preventDefault()

    const user = {
      name,
      email,
      pass
    }


    if(pass !== rePass){
      setWrogpass(true);
      return
    }
    setWrogpass(false);

    const res = await createUser(user);

    console.log(res)
  }
  
  return (
    
    <div >
      {wrongpass && <p className='wrong'>as senhas não são iguais</p>}
      {error && <p className={style.wrong}>{error}</p>}
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