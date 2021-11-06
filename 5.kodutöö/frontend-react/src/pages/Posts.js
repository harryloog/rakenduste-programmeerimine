import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, updatePosts } from "../store/actions";
import { Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Posts() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
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
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setText("");

    addNewPost()

    if (inputRef1.current) inputRef1.current.focus();
    if (inputRef2.current) inputRef2.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
      text,
      date: Date.now(),
      author: state.auth.user,
      changedby: state.auth.user
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
    console.log(state.posts.data);
  };

  console.log({ inputRef1, inputRef2 });


  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
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
        <Link to={`/posts/${record.id}`}><EditOutlined /></Link>
      ) : null,
  },
  ];
  
  

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
      
      <Table style={{textAlign: "center" }} columns={columns} dataSource={state.posts.data}  />
    </div>
  );
}

export default Posts;
