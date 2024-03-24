import { useRouteError } from "react-router"

const ErrorPage = ()=>{
const err = useRouteError()
console.log(err);
    return(
<>
        <h1>Opps!!!</h1>
        <h2>Somthing went Wrong</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
        <h3>{`${err.data}`}</h3>
        </>
    )
}

export default ErrorPage