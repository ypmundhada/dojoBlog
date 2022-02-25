import React from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// we need to stop fetch the data when the component using it unmounts.
// if we quickly go to new blog while home is fetching the data, it gives a warning.
// we must stop the fetch, so we don't try to update the state.



// To introduce multiple pages or routes in the react application.
// and the way to do this is with react router.
// non-react sites:
// initial request to the browser, server responds by sending back the html page.
// we sent requests to the server to load a particular link
// and server responds back by loading the full html page.
// if we click on contacts page, it sends a request to the server, and it sends back the contact.html page.
// 
// react-sites:
// same initial request.
// but in addition it also sends back the compiled react JS files, which controls the application.
// and from then, react router can take full control of the app.
// it sends empty html page, react then injects the components
// if we click on the contact page, the request won't go to the server, the router will intercept the request, and stop it going to the server, then react will inject that particular component.


const Home = () => {
    // let name = "Yadnesh"
    // const [name,setName] = React.useState("Yadnesh")
    // const [age,setAge] = React.useState(25)
    // const handleClick = (e) => {
        // console.log("Hello World",e.target);
        // setName("Asdf");
        // setAge(30);

    // }
    // const handleClick2 = (name,e) => {
    //     console.log("Hello " + name,e.target);
    // }

    // const [name,setName] = React.useState("mario")

    // const [blogs,setBlogs] = React.useState([
    //     {title: 'My new Website', body:'lorem ipsum...',author:'mario','id':1},
    //     {title: 'Welcome party!', body:'lorem ipsum...',author:'yoshi','id':2},
    //     {title: 'Web dev top tips', body:'lorem ipsum...',author:'mario','id':3}
    // ]);
    // const [blogs,setBlogs] = React.useState(null)
    // const [isPending,setIsPending] = React.useState(true)
    // const [error,setError] = React.useState(null)

    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => (
    //         blog.id !== id
    //     ))
    //     setBlogs(newBlogs)
    // }

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //             .then(response => {
    //                 // console.log(response);
    //                 if (!response.ok) {
    //                     throw Error("Could not fetch the data for that resource")

    //                 }
    //                 return response.json()
    //             })
    //             .then(data => {
    //                 // console.log(data);
    //                 setBlogs(data)
    //                 setIsPending(false)
    //                 setError(null)
    //             })
    //         .catch((err) => {
    //             // console.log(err.message);
    //             setError(err.message)
    //             setIsPending(false)
    //             // "failed to fetch" => err if connection with server is not established.
    //             // if the req is denied by the server, fetch can't catch that error, as server is sending the response, but only that it does not contain the data.
    //         })
    //     },1000)
    // },[])
    // only run on first render.


    // const blogitems = blogs.map((blog) => (
    //     <BlogList data={blog}/>
    // ));
    // console.log(blogitems);
    // after creating a custom Hook useFetch:
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/> */}
            
            {/* {blogitems} */}
            {/* {blogs.map((blog) => 
                (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </div>
                )
            )} */}

            {/* <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me!</button> */}
            {/* <button onClick={(e) => {
                handleClick2('Yadnesh',e)
                }
            }>Click me Again</button> */}

        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Home Page</h2>
</div>