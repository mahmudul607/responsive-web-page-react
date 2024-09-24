import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Lyout/Main/Main";
import Home from "../Pages/Home/Home";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }])

export default Router;