import { NavLink, Outlet } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { setLogOut } from "../Features/Auth/auth.slice"

const Home=()=>{
  const dispatch=useAppDispatch()
  const handelLogOut=()=>{
    dispatch(setLogOut(null))
  }
  return (
    <div>
      <button onClick={handelLogOut}>Logout</button>
        <h3>This is Home Page....</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis blan</p>
        <NavLink to='/home'>1 </NavLink>
        <NavLink to='/home/2'>2 </NavLink>
        <NavLink to='/home/3'>3 </NavLink>
        <Outlet/>
    </div>
  )
}

export default Home