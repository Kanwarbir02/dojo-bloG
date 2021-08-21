import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    const handleSubmit = e => {
        e.preventDefault();
        const blog = {b_title: title, b_body: body, b_author: author};

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
            }).then(() => {
            console.log('new blog added');
        })
  }
    

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Title</label>
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />

                <label>Body</label>
                <textarea required value={body} onChange={e => setBody(e.target.value)}> </textarea>

                <label>Written by: </label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
            </form>

        </div>


        
     );
}
 
export default Create;