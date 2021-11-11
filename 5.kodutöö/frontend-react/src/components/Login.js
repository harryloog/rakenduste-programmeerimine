import { loginUser } from "../store/actions";
import { Button, Input } from 'antd';
import { useContext, useState } from "react";
import { Context } from "../store";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import './App.css';

export default function Login ({setUser}){
    const [user, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");
    const [state, dispatch] = useContext(Context);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = await (await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({user, password}),
            })).json();

        if(token.token) {
            setUser(token);
            setError("")
          } else if (token.error){
            setError(token.error)
          } else {
            setError(token.msg['0'].msg)
          }
        
        await dispatch(loginUser(token));
        history.push('/posts');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <Input placeholder="Email" type = "text" onChange={(e) => setUsername(e.target.value)} /><br/>
                <label>Password:</label><br/>
                <Input.Password onChange={(e) => setPassword(e.target.value)} /><br/>
                <Button type="primary" htmlType="submit">Login</Button><br/>
            </form>
        </div>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
  };