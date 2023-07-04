import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
import { Provider } from "react-redux";
import store from '../store/Store';

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <NavBarPanel/> 
     <div className="container my-3">
     <main>
        <Outlet/>
     </main>
     </div>  
    </Provider>     
    </>
  )
}

export default RootLayout
