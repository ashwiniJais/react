import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import { resList } from '../static/data/resList';
import Header from '../component/Header';
import Body from '../component/Body';
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import About  from '../component/About';
import Contact from '../component/Contact';
import Error from '../component/Error';
import RestaurantMenu from '../component/RestaurantMenu';
// import Grocery from '../component/Grocery';

const Grocery =lazy(()=>import ('../component/Grocery'))

const root=ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            {/* This outlet will be replaced by the element from the router */}
            <Outlet/>
        </div>
    );
}

const router= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>, 
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu/>,
            },
            {
                path:'/grocery',
                element:(<Suspense fallback = { <div> Please Wait... </div> } ><Grocery/></Suspense>),
            }
        ],
        errorElement: <Error/>
    }
    ,
])

root.render(<RouterProvider router={router} />); 