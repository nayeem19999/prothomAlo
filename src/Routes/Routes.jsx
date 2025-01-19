import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import MidHome from "../pages/Home/MidHome/MidHome";
import DynamicHome from "../pages/Home/DynamicHome/DynamicHome";

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
            }
        ]
    }
])

export default router;