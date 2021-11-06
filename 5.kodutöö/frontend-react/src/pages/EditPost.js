import { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store";
import { updatePosts, removePost } from "../store/actions";
import { Table } from 'antd';
import { Link } from 'react-router-dom';

function EditPost(){
  const id = useParams();
  const [state, dispatch] = useContext(Context);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  

  useEffect(()=>{
    /* fetch('http://localhost:8081/api/post/').then(res => {
      return res.json();
    }).then(async (data) =>{
      console.log(data);
      await dispatch(updatePosts(data))
      console.log(state.posts.data)
    }); 
   */dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1",
        text: "sfhieahfajoijiosyiaiufiuhsfihawfehiha",
        date: Date.now(),
        author: state.auth.user,
        changedby: state.auth.user
      },
      {
        id: 2,
        title: "Test-prefetched-array-2",
        text: "sfhieahfajoijiosyiaiufiuhsfihawfehiha",
        date: Date.now(),
        author: state.auth.user,
        changedby: state.auth.user
      },
      {
        id: 3,
        title: "Test-prefetched-array-3",
        text: "sfhieahfajoijiosyiaiufiuhsfihawfehiha",
        date: Date.now(),
        author: state.auth.user,
        changedby: state.auth.user
      },
      {
        id: 4,
        title: "Test-prefetched-array-4",
        text: "sfhieahfajoijiosyiaiufiuhsfihawfehiha",
        date: Date.now(),
        author: state.auth.user,
        changedby: state.auth.user
      },
    ]))
  },[]);  


  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setText("");

    updatePost()

    if (inputRef1.current) inputRef1.current.focus();
    else if (inputRef2.current) inputRef2.current.focus();
  };

  const handleDelete = () => {
    dispatch(removePost(id));
    /* fetch('http://localhost:8081/api/post/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      } 
    });*/
  }

  const updatePost = () => {
    const updatedPost = {
      ...(state.posts.data.find(obj => {return obj.id === id})),
      title,
      text,
      changedby: state.auth.user
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(updatePosts(updatedPost));
  };

  console.log({ inputRef1, inputRef2 });
  console.log(state.posts.data)
  const currentPost = state.posts.data.find(x => x.id === id)
  setTitle(currentPost.title)
  setText(currentPost.text)

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
        <button type="primary" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default EditPost;