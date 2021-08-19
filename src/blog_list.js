const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title
    const handleDelete = props.handleDelete


    return ( 
        <div className="bloglist">
            <h1>{title}</h1>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                
                <h2>{blog.content}</h2>
                <p>Written By {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete This Blog</button>
            </div>
        ))}
        </div>
        
     );
}
 
export default BlogList;