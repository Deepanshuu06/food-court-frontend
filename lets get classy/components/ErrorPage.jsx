import { useRouteError } from "react-router"
import { Link } from "react-router-dom";

const ErrorPage = ()=>{
const err = useRouteError()
console.log(err);
    return(
<>
<div className="errorPage">
    <img src="https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg" alt="" />

       <Link to={"/"}><button className="error-button"> back to Home</button></Link> 
        <h3>{err.status}</h3>
</div>
        
        </>
    )
}

export default ErrorPage