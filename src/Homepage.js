import {useState} from "react";
import BlogList from "./blog_list";

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {author:"Jake", content: "Lorem Ipsum is simply dummy text", title: "Art Of Jake", id:1},
        {author:"Shelly", content: "Lorem Ipsum is simply  text", title: "Art Of Shelly", id:2},
        {author:"Robert", content: "Lorem Ipsum is simply dummy text", title: "Art Of Robert", id:3},
        {author:"Jake", content: "Lorem Ipsum ....", title: "Art Of Jake", id:4}
    ])

    const handleDelete = (deleteId) => {
        // This line of code makes a new array of blogs, filering out the ones not to be deleted
        const newBlogs = blogs.filter((blog) => blog.id !== deleteId); 
        setBlogs(newBlogs);
    }
    
    return ( 
        
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>

        {/* <BlogList blogProp={blogs.filter((blog) => blog.author.toLowerCase() === "jake")} title="Jake's Blogs" /> */}
            
        </div>
     );
}
 
export default Homepage;