import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from 'firebase/auth'
import {auth} from '../firebase/firebase-config'
import { useState, useEffect } from 'react'
import { Idata } from './types.ts/type';

export const useAuthentication = () =>{
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false)
    const [cancelled, setCancelled] = useState(false);

    function checkIfCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data: Idata) => {
        checkIfCancelled();
        setLoading(true);

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.pass
            )

            await updateProfile(user, {
                displayName: data.name
            })

        } catch (error:any) {
            let systemError
             if(error.message.includes("Password")){
                systemError = "A senha precisa no mínimo 6 caracteres"
             }
             if(error.message.includes("email")){
                systemError = "E-mail já está em uso"
            } 
            setError(systemError);

        }finally{
            setLoading(false);
        }
    }

    const login = async (data:Idata) => {
        setLoading(true)
        try {
           await signInWithEmailAndPassword(auth, data.email, data.pass);
        } catch (error:any) {
            if(error.message.includes("invalid")){
                setError("Email ou senha Inválidos")
            }else{
                console.log(error.message)
            }
        }finally{
            setLoading(false);
        }
       
    }
    
    const logout = () => {
        checkIfCancelled();
        signOut(auth);
    }

    useEffect(()=>{
       return () => setCancelled(true);
    },[])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}