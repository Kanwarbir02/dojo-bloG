import BlogList from "./blog_list";
import useFetch from "./useFetch";

const Homepage = () => {
   
  const {data: blogs, isPending, error}= useFetch('http://localhost:8000/blogs');

    return ( 
        
        <div className="home">
          {error && <h2>not able to fetch data from json...</h2>}
          {isPending && <h2>Loading blogs...</h2>}
          {blogs && <BlogList blogs={blogs} title="All Blogs"/> } 
            
       
            
        </div>
     );
}
 
export default Homepage;