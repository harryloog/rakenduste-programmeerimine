import { loginUser } from "../store/actions"
import { Context } from "../store";

const Register = () => {
    const [user, setUsername] = React.useState("")
    const [token, setPassword] = React.useState("")
    const [state, dispatch] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsername("");
        setPassword("");


        const data = {
            token,
            user
        }

        dispatch(createUser(data));        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <input type = "text" onChange={(e) => setUsername(e.target.value)} /><br/>
                <label>Password:</label><br/>
                <input type = "text" onChange={(e) => setPassword(e.target.value)} /><br/>
                <button type="submit">Register</button><br/>
            </form>
        </div>
    )
}

export default Register;