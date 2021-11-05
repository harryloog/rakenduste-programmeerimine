import { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store";
import { updatePosts } from "../store/actions";

function EditPost(){
  const id = useParams();
  const [state, dispatch] = useContext(Context);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(()=>{
    fetch('http://localhost:8081/api/post/').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setTitle(data.find(d=>d.id===id).title);
      setText(data.find(d=>d.id===id).text);
    });
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setText("");

    updatePost(id)

    if (inputRef1.current) inputRef1.current.focus();
    else if (inputRef2.current) inputRef2.current.focus();
  };

  const updatePost = (id) => {
    const updatedPost = {
      id,
      title,
      text,
      date: state.posts.data.find(d=>d.id===id).date,
      author: state.posts.data.find(d=>d.id===id).author,
      changedby: state.auth.user
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(updatePosts(updatedPost));
  };

  console.log({ inputRef1, inputRef2 });


return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input
          ref={inputRef1}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <label>Post text:</label>
        <input
          ref={inputRef2}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPost;