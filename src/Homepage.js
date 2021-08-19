import {useState, useEffect} from "react";
import BlogList from "./blog_list";

const Homepage = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (deleteId) => {
        // This line of code makes a new array of blogs, filering out the ones not to be deleted
        const newBlogs = blogs.filter((blog) => blog.id !== deleteId); 
        setBlogs(newBlogs);
    }


    const [name, setName] = useState("Mario");

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
           setBlogs(data);
          })
      }, [])

    return ( 
        
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/> } 
            
        {/* <BlogList blogProp={blogs.filter((blog) => blog.author.toLowerCase() === "jake")} title="Jake's Blogs" /> */}
            
        </div>
     );
}
 
export default Homepage;