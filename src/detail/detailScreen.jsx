



import { useLocation } from "react-router-dom";




function DetailScreen(){

    const location=useLocation();
    const data=location.state

    return (
        <div>
            <h1>Thih is detail screen</h1>
            <h5>{data?.id}</h5>
            <h5>{data?.username}</h5>
        
        </div>
    )
}


export {DetailScreen};