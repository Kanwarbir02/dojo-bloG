import { useState } from "react";

const Create = () => {

    const [b_title, setTitle] = useState("");
    const [b_body, setBody] = useState("");
    const [b_author, setAuthor] = useState("mario");

    const handleSubmit = e => {
        e.preventDefault();
        const blog = {b_title, b_body, b_author};

        console.log(blog)
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Title</label>
                <input type="text" required value={b_title} onChange={e => setTitle(e.target.value)} />

                <label>Body</label>
                <textarea required value={b_body} onChange={e => setBody(e.target.value)}> </textarea>

                <label>Written by: </label>
                <select value={b_author} onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
            </form>

        </div>


        
     );
}
 
export default Create;