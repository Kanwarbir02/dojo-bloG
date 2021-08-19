import {useState} from "react";
import BlogList from "./blog_list";

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {author:"Jake", content: "Lorem Ipsum is simply dummy text", id:1},
        {author:"Shelly", content: "Lorem Ipsum is simply  text", id:2},
        {author:"Robert", content: "Lorem Ipsum is simply dummy text", id:3}
    ])
    
    return ( 
        
        <div className="home">
            <BlogList blogProp={blogs}/>
            
        </div>
     );
}
 
export default Homepage;