const BlogList = (props) => {
    const blogs = props.blogProp;


    return ( 
        <div className="bloglist">
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.content}</h2>
                <p>Written By {blog.author}</p>
            </div>
        ))}
        </div>
        
     );
}
 
export default BlogList;