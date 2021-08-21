import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    
    const {id} = useParams();

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleDelete = () =>{
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/")
        })
    }

    return ( 
        <div className="details-blog">
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blog && <div>
                <h2>{blog.title}</h2>
                <h4>Written by {blog.author}</h4>
                <p>{blog.body}</p>

                <button onClick={handleDelete}>Delete</button>
            </div>}
        </div>
     );
}
 
export default BlogDetails;