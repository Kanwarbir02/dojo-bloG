import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <h3>This page does not exist</h3>

            <Link to="/">Back to the Homepage...</Link>
        </div> 
        
     );
}
 
export default NotFound;