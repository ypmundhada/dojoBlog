import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"#f13586",
                    borderRadius:"8px"
                }}>New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#f13586",
                    borderRadius:"8px"}}>New Blog</Link>
            </div>
        </nav>
     );
}
 
// Link tags used will prevent fresh requests to the server, react will match the path to the routes, and will inject.
export default Navbar;