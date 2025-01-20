import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import MidHome from "../pages/Home/MidHome/MidHome";
import DynamicHome from "../pages/Home/DynamicHome/DynamicHome";
import NewDetails from "../pages/NewsDetails/NewDetails";
import Register from "../pages/Register/Register";
import PrivateRoute from "./privateRouter/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<MidHome></MidHome>
                    },
                    {
                        path:'news/:id',
                        loader:({params})=>fetch(`https://authentication-project-one.vercel.app/news/categories/${params.id}`),
                        element:<DynamicHome></DynamicHome>
                    }
                ]
            },
            {
                path:'/:id',
                loader:({params})=>fetch(`https://authentication-project-one.vercel.app/news/${params.id}`),
                element:<PrivateRoute><NewDetails></NewDetails></PrivateRoute>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;