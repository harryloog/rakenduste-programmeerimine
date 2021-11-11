import { Button, Input } from 'antd';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './App.css';

const Register = () => {
    const [user, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [error, setError] = useState("");
    const history = useHistory();

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerUser = await (await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({firstName, lastName, user, password}),
            })).json();

        if(registerUser.error) {
            setError(registerUser.error)
          } else if (registerUser.message){
            setError("Success!")
          } else {
            setError(registerUser.msg['0'].msg)
          }
    }
    

    return(
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit}>
                <label>First name:</label><br/>
                <Input placeholder="First name" type = "text" onChange={(e) => setFirstName(e.target.value)} /><br/>
                <label>Lsat name:</label><br/>
                <Input placeholder="Last name" type = "text" onChange={(e) => setLastName(e.target.value)} /><br/>
                <label>Email:</label><br/>
                <Input placeholder="Email" type = "text" onChange={(e) => setUsername(e.target.value)} /><br/>
                <label>Password:</label><br/>
                <Input placeholder="Password" type = "password" onChange={(e) => setPassword(e.target.value)} /><br/>
                <Button type="primary" htmlType="submit">Sign up</Button><br/>
            </form>
        </div>
    )
}

export default Register;