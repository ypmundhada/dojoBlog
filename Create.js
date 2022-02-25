import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("mario")
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();
    // this will be used for redirecting the user to a different route.
    // it may be used to go backkwards, and forwards through history.


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const blog = {title,body,author}
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
            })
            .then(() => {
            console.log("new blog added")
            setIsPending(false)
            // history.go(-1)
            // to go back 1 step
            // to redirect => 
                history.push('/');
            })
        },500)
        
        
    }
    return ( 
        <div className="create">
           <h2>Add a new Blog</h2> 
           <form onSubmit={handleSubmit}>
               <label htmlFor="">Blog title:</label>
               <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body:</label>
                <textarea 
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                />
                <label htmlFor="">Blog author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}    
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
           </form>
        </div>
     );
}
 
export default Create;