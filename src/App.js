import React from 'react';
import ReactDOM from 'react-dom/client';
// import { resList } from '../static/data/resList';
import Header from '../component/Header';
import Body from '../component/Body';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About  from '../component/About';

const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    );
}

const router= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/> 
    }
    ,{
        path:"/about",
        element: <About/>
    },
])

root.render(<RouterProvider router={router} />); 