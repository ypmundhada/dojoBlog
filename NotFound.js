import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page could not be ofund</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;