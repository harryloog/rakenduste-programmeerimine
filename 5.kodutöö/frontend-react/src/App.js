import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import EditPost from "./pages/EditPost";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path='/posts/:id' component={EditPost} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
