import { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store";
import { updatePosts, removePost } from "../store/actions";
import { Button, Input, Space } from 'antd';
import { useHistory } from "react-router-dom";
import '../components/App.css';

function EditPost(){
  const {id} = useParams();
  const [state, dispatch] = useContext(Context);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [currentPost, setCurrentPost] = useState([]);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const history = useHistory();

  useEffect(()=>{
    fetch('http://localhost:8081/api/post/'+id)
    .then((res) => res.json())
    .then(async (data) => {
      setTitle(data.title);
      setText(data.text);
      setCurrentPost(data);
      await dispatch(updatePosts(data));
      console.log(state.posts.data, currentPost);
    });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    updatePost()

    history.push('/posts')
  };

  const handleDelete = () => {
    dispatch(removePost(id));
    fetch('http://localhost:8081/api/post/delete/' + id, {
      method: 'DELETE',
    });
    history.push('/posts')
  }

  async function updatePost  ()  {
    const nullUser = state.auth.user == null ? "none" : state.auth.user
    const updatedPost = {
      ...currentPost,
      title,
      text,
      changedby: nullUser
    };
    console.log(updatedPost); 

    fetch('http://localhost:8081/api/post/update/' + id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(updatedPost),
    }).then(res => {
      return res.json();
    }).then(async (data) =>{
      console.log(data)
    });
  }

  console.log({ inputRef1, inputRef2 });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
      <br/>
        <Input
          placeholder="Title"
          ref={inputRef1}
          type="text"
          value={title}
          onChange={(e) => setTitle( e.target.value)}
          autoFocus
        />
        <br/>
        <label>Post text:</label>
      <br/>
        <Input
          placeholder="Text"
          ref={inputRef2}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <br/><br/>
        <Space>
          <Button htmlType="submit" type="primary">Submit</Button>
          <Button type="primary" danger onClick={handleDelete}>Delete</Button>
        </Space>
      <br/><br/>
      </form>
      
    </div>
  );
}

export default EditPost;