import React from "react";
import Auth from "./components/auth/Auth";
import { Routes , Route, Router } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Register } from "./components/registration/Register";

export const Routing = () => {
    let PUBLIC_ROUTES = [
        {
           link:"/",
           element: <Home/>,
           id:1
        },
        {
            link: "/auth",
            element:<Auth/>,
            id:2

        },
        {
            link:"/regist",
            element:<Register/>,
            id:3
        }
        
    ]


    return(
        
        <Routes>
            
        {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      
        </Routes>
    )
}