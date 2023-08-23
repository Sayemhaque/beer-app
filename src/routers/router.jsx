import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Beers from "../pages/Beers/Beers";
import PrivateRoute from "../Private/PrivateRoute";
import Details from "../pages/Beers/Details";


export const router = createBrowserRouter([
   {
    path:"/",
    element:<App/>
   },
   {
    path:"/beers",
    element:<PrivateRoute><Beers/></PrivateRoute>
   },
   {
      path:"/details/:id",
      element:<PrivateRoute><Details/></PrivateRoute>,
      loader: ({params}) => fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
   }
])