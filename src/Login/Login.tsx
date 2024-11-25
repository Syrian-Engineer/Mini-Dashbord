import { useState } from 'react'
import './Login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/FBConfig';

const Login = () => {
    const[NewUser,setNewUser] = useState(true);
    const [userName,setUserName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [errorImg,setErrorImg] = useState(false);
    const[errorMsg,setErrorMsg] = useState(false)


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setErrorImg(false)

        if(NewUser){
            //Create User
            await createUserWithEmailAndPassword(auth,email,password).then(()=>{
                localStorage.setItem("userName",userName)
            }).catch((err)=>{
                setErrorImg(true)
                const errorMsg = err.message;
                setErrorMsg(errorMsg)
            })

        }else{
            //Login User
            await signInWithEmailAndPassword(auth,email,password).catch((err)=>{
                setErrorImg(true)
                const errorMsg = err.message;
                setErrorMsg(errorMsg)
            })
        }
    }
  return (
    <div className="login-page">
        <header>
            <span>
                form<i>Engineer Koussai</i>
            </span>
        </header>
        <img 
        className='logo'
        src='/src/assets/images/infinity.png'
        />

        <h2 className="title">Sub-Min Dashbord</h2>

        <form onSubmit={(e)=>handleSubmit(e)}>

            {NewUser &&(
            <div className="userName">
                <input 
                type="text" 
                required
                onChange={(e)=>setUserName(e.target.value)}
                 />
                <label htmlFor="email">UserName</label>
            </div>
        )}

            <div className="email">
                <input 
                type="email" 
                required
                onChange={(e)=>setEmail(e.target.value)}
                 />
                <label htmlFor="email">Email</label>
            </div>

            <div className="password">
                <input 
                type="password" 
                required
                onChange={(e)=>setPassword(e.target.value)}
                 />
                <label htmlFor="password">password</label>
            </div>
            {errorImg && <img src="/src/assets/images/warning.png" alt="" className='status' />}
            {errorMsg && <span className="error">Proccess Failed {errorMsg}</span>}
            <button type='submit'>{NewUser ? "Sign Up" :"Log In"}</button>
        </form>

        {NewUser?(
            <span className='user-stat'>Already have an account <b onClick={()=>{
                setNewUser(!NewUser)
                setErrorImg(false)
            }}>Log In</b></span>
        ):(
            <span className='user-stat'>Don't have an account <b onClick={()=>{
                setNewUser(!NewUser)
                setErrorImg(false)
            }}>Sign Up</b></span>
        )}
        
    </div>
  )
}

export default Login