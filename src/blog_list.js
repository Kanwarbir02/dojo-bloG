const BlogList = (props) => {
    const blogs = props.blogProp;
    const title = props.title


    return ( 
        <div className="bloglist">
            <h1>{title}</h1>
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