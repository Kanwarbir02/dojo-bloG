import {useState} from "react";

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {author:"Jake", content: "Lorem Ipsum is simply dummy text", id:1},
        {author:"Shelly", content: "Lorem Ipsum is simply  text", id:2},
        {author:"Robert", content: "Lorem Ipsum is simply dummy text", id:3}
    ])
    
    return ( 
        
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.content}</h2>
                    <p>Written By {blog.author}</p>
                </div>
            ))}
            
        </div>
     );
}
 
export default Homepage;