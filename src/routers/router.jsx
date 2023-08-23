import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Beers from "../pages/Beers/Beers";
import PrivateRoute from "../Private/PrivateRoute";


export const router = createBrowserRouter([
   {
    path:"/",
    element:<App/>
   },
   {
    path:"/beers",
    element:<PrivateRoute><Beers/></PrivateRoute>
   }
])