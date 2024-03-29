import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import { Home } from "../Pages/home/Home";
import Menu from "../Pages/shop/Menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
           
        ]
    },
]);

export default router;