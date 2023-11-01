import React from 'react';
import ReactDOM from 'react-dom/client';
import { resList } from '../static/data/resList';
import Header from '../component/Header';
import Body from '../component/Body';

const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    );
}

root.render(<AppLayout/>); 