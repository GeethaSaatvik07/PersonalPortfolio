import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default App;

// 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
