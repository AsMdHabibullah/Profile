import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import preloder from "./Images/preloader.gif";
import "./App.scss";
import Error from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Hoom";
import Blog from "./Blog";
import ProjectDetails from "./Hoom/ProjectDetails";
import PostDetails from "./Blog/PostDetails";
import Contact from "./Contact";
import Cv from "./Cv";

class App extends Component {
  state = {
    src: preloder,
    spinner: true
  };
  onLoding = () => {
    this.setState({
      src: "",
      spinner: ""
    });
  };

  timingFunction = () => {
    return setTimeout(this.onLoding, 3000);
  };

  Routs = () => {
    return configureStore({ history });
  }

  render() {
    const { src, spinner } = this.state;
    return (
      <BrowserRouter history={Routs()} basename={process.env.PUBLIC_URL}>
        <div className="loader">
          <img src={src} onLoad={this.timingFunction} alt={src} />
        </div>
        {!spinner && (
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/blog" component={Blog} />
              <Route path="/project-details" component={ProjectDetails} />
              <Route path="/post-details" component={PostDetails} />
              <Route path="/cv" component={Cv} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
