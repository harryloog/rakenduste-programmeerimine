import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, updatePosts } from "../store/actions";
import { Table, Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Posts.css';
import '../components/App.css';

function Posts() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  useEffect(()=>{
    fetch('http://localhost:8081/api/post/').then(res => {
      return res.json();
    }).then(async (data) =>{
      console.log(data);
      await dispatch(updatePosts(data))
      console.log(state.posts.data)
    }); 
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setText("");

    addNewPost()

    if (inputRef1.current) inputRef1.current.focus();
    if (inputRef2.current) inputRef2.current.focus();
  };


  const addNewPost = () => {
    
    
    const nullUser = state.auth.user == null ? "none" : state.auth.user
    
    const newPost = {
      title,
      text,
      date: Date.now(),
      author: nullUser
    };
    fetch('http://localhost:8081/api/post/create', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPost),
    } ).then(async (res) => {
      console.log(res)
      await dispatch(addPost(newPost));
    });
  };

  console.log({ inputRef1, inputRef2 });


  
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Changed by',
      dataIndex: 'changedby',
      key: 'changedby',
    },
    {title: 'Edit',
    dataIndex: 'operation',
    render: (_, record) =>
      state.posts.data.length >= 1 ? (
        <Link to={`/posts/${record._id}`}><EditOutlined /></Link>
      ) : null,
  },
  ];
  
  

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
          onChange={(e) => setTitle(e.target.value)}
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
        <Button htmlType="submit" type="primary">Submit</Button>
      </form>
      
      <br/>
      <br/>
      <Table columns={columns} pagination={false} dataSource={state.posts.data}  />
    </div>
  );
}

export default Posts;
