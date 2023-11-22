import { useRouteError } from 'react-router-dom';

const Error =()=>{
    const err= useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!! Error</h1>
            <h2>Something went wrong!!!</h2>
            <div>{err?.data }</div>
        </div>
    )
}
export default Error;