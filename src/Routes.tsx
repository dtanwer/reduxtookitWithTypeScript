import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Protected from './Components/protected/Protected'
import Page1 from './Components/HomePages/Page1'
import Page2 from './Components/HomePages/Page2'
import Page3 from './Components/HomePages/Page3'
const  UserRoutes=()=> {
  return (
    <div>     
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={ <Protected><Home/></Protected>}>
            <Route index element={<Page1/>}/>
            <Route path='2' element={<Page2/>}/>
            <Route path='3' element={<Page3/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default UserRoutes