import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

const App = () => (
  <>
    <AnimatedCursor
      innerSize={8}
      outerSize={25}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2.2}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </>
);

export default App;

// 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
