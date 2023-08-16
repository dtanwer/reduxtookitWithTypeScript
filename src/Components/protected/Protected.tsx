import { Navigate } from "react-router-dom"
import { useAppDispatch,useAppSelector } from "../../app/hooks"
type protectedPros={
    children:JSX.Element
}
const Protected=({children}:protectedPros)=> {
    const isLogin=useAppSelector((state)=>state.auth.isLogin)
    if(!isLogin)
    {
        return <Navigate to="/" replace />;
    }
    return(
       <>{children}</>
    )
}

export default Protected