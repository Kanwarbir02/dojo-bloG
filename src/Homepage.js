import {useState, useEffect} from "react";
import BlogList from "./blog_list";
import useFetch from "./useFetch";

const Homepage = () => {
   
  const {data: blogs, isPending, error}= useFetch();

    // const handleDelete = (deleteId) => {
    //     // This line of code makes a new array of blogs, filering out the ones not to be deleted
    //     const newBlogs = blogs.filter((blog) => blog.id !== deleteId); 
    //     setData(newBlogs);
    // }

    
    

    return ( 
        
        <div className="home">
          {error && <h2>not able to fetch data from json...</h2>}
          {isPending && <h2>Loading blogs...</h2>}
          {blogs && <BlogList blogs={blogs} title="All Blogs"/> } 
            
        {/* <BlogList blogProp={blogs.filter((blog) => blog.author.toLowerCase() === "jake")} title="Jake's Blogs" /> */}
            
        </div>
     );
}
 
export default Homepage;