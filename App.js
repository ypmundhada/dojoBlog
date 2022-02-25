import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// Sorround the entire app with Router component, so that all components nested inside App have access to the router

function App() {
  // const title = "Welcome to the new blog"
  // const likes = 50;
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* Navbar is not in switch, as it will be shown every time, but comp inside switch will change based on the route's path. */}
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
            {/* when we click on the a tags in navbar, it still sends a fresh request to server, not through the react router. */}
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
