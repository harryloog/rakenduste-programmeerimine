import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Fun from "./components/Fun";
import Posts from "./pages/Posts";
import StateExample from "./components/StateExample";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div>
      <h1>Some text</h1>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path='/posts/:id' component={EditPost} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/greeting" component={Greeting} />
          <Route exact path="/fun" component={Fun} />
          <Route exact path="/ex" component={StateExample} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
