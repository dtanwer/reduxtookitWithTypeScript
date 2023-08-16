import { NavLink } from "react-router-dom"
import Input from "../Components/Input/Input"
import { useAppDispatch } from "../app/hooks"
import { setLogin } from "../Features/Auth/auth.slice"

const Login=()=> {
  const dispatch=useAppDispatch()
  const hadelLogin=()=>{
    dispatch(setLogin({name:'deepak',password:'123'}));
  }
  return (
    <div>
       <NavLink to='/home'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <h2>Login Here</h2>
        <Input type="text" placeholder="Enter Name"/>
        <Input type="password" placeholder="Enter Password"/>
        <button onClick={hadelLogin}>Login</button>
    </div>
  )
}

export default Login