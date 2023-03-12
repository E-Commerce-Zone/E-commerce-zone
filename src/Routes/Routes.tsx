import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
   {
      element: <Main></Main>, 
      path: '/', 
      children: [
         {
            path: "/", 
            element: <Home></Home>
         }
      ]
   }
])



export default Routes ; 