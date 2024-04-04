// source: https://www.youtube.com/watch?v=pJiRj02PkJQ 

import {useState} from "react";

const Form = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); // sets the default value to "Yoshi" in the paragraph element
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        //prevent default action of form being submitted (everything being erased)
        e.preventDefault();

        // create a blog object, like in the db.json file
        const blog = {title, body, author};
        //console.log(blog); // to test if it created an object (developer tools > console)

        // send a POST request to send to a particular end point that JSON server provides us with so we can add the object to our data
        fetch('http://localhost:8000/blogs', {
            method: 'POST', // we are sending data, GET is querying data from the server
            headers: { "Content-Type": "application/json"}, // headers property = set the content type being sent
            body: JSON.stringify(blog) // body property = the actual data we are sending, turned into a string
            // JSON server automatically adds the ID property
        }).then(() => { // the action after the POST is made
            console.log("new blog added")
        })
    }

    return(
        <div className="form">
            <h2> Add a new blog </h2>
            <form onSubmit={handleSubmit}>

                <label> Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label> Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario"> mario </option>
                    <option value="yoshi"> yoshi </option>
                </select>

                <button> Add Blog </button>
                <p> {title} </p> 
                <p> {body} </p>
                <p> {author} </p>
            </form>
        </div>
    )

}

export default Form;