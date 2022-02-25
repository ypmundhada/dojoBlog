import React from "react"
import { Link } from "react-router-dom";
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title
    // console.log(props);
    // const handleDelete = props.handleDelete
    
    return (
            <div className="blog-list">
                <h2>{title}</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written By: {blog.author}</p>
                        </Link>
                    </div>
                ))}
                </div>
            // <div className="blog-preview">
            //     <h2>{props.bl}</h2>
            //     <p>Written by: {props.data.author}</p>
            // </div>
            );
}
 
export default BlogList;