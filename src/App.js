import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { resList } from '../static/data/resList';
import Header from '../component/Header';
import Body from '../component/Body';
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import About  from '../component/About';
import Contact from '../component/Contact';
import Error from '../component/Error';
import RestaurantMenu from '../component/RestaurantMenu';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from '../component/Cart';
// import Grocery from '../component/Grocery';

const Grocery =lazy(()=>import ('../component/Grocery'))

const root=ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = ()=>{

    const [userName, setUserName]=useState();

    useEffect(()=>{
        // Make an API call and send username and pwd
        const data=({
            name:"Ashwini",
        })

        setUserName(data.name);
    },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className='app'>
                        <Header/>
                    {/* This outlet will be replaced by the element from the router */}
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    }
    ,
])

root.render(<RouterProvider router={router} />); 