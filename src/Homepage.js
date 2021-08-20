import {useState, useEffect} from "react";
import BlogList from "./blog_list";

const Homepage = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (deleteId) => {
        // This line of code makes a new array of blogs, filering out the ones not to be deleted
        const newBlogs = blogs.filter((blog) => blog.id !== deleteId); 
        setBlogs(newBlogs);
    }


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(res.ok !== true){
                  throw Error("not able to fetch data from json...");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
      }, [])

    return ( 
        
        <div className="home">
          {error && <h2>not able to fetch data from json...</h2>}
          {isPending && <h2>Loading blogs...</h2>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/> } 
            
        {/* <BlogList blogProp={blogs.filter((blog) => blog.author.toLowerCase() === "jake")} title="Jake's Blogs" /> */}
            
        </div>
     );
}
 
export default Homepage;