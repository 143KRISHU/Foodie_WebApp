import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import Home from './Components/Home.jsx';
import Layout from './Components/Layout.jsx';


function AppRoutes() {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
export default AppRoutes;
