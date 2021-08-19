import {useState} from "react";
import BlogList from "./blog_list";

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {author:"Jake", content: "Lorem Ipsum is simply dummy text", title: "Art Of Jake", id:1},
        {author:"Shelly", content: "Lorem Ipsum is simply  text", title: "Art Of Shelly", id:2},
        {author:"Robert", content: "Lorem Ipsum is simply dummy text", title: "Art Of Robert", id:3},
        {author:"Jake", content: "Lorem Ipsum ....", title: "Art Of Jake", id:4}
    ])
    
    return ( 
        
        <div className="home">
            <BlogList blogProp={blogs} title="All Blogs"/>

            <BlogList blogProp={blogs.filter((blog) => blog.author.toLowerCase() === "jake")} title="Jake's Blogs" />
            
        </div>
     );
}
 
export default Homepage;