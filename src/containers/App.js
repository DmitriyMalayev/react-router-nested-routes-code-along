import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoviesPage from "./MoviesPage";

class App extends Component {
  state = {
    movies: {
      1: { id: 1, title: "A River Runs Through It" },
      2: { id: 2, title: "Se7en" },
      3: { id: 3, title: "Inception" },
    },
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            path="/movies"
            render={(routerProps) => (
              <MoviesPage {...routerProps} movies={this.state.movies} />
            )}
          />
        </div>
      </Router>
    );
  }
}

// Notice what is happening on the second Route. When rendering a component through a Route with the render prop, the function accepts an argument, routerProps. When the path matches the URL, the Route will call the function inside render and pass in the current information available about the route, including the URL path that caused the Route to render. This is not possible with the regular component prop on Routes we've seen before.  So, if the URL path matches /movies, the function inside render is called. The object that is passed in, routerProps, gets passed to the MoviesPage component as props. Using the spread operator ({...routerProps}) will result in the creation of props for each key present inside the routerProps object. This isn't vital but is a helpful way to pass many props in without too much code clutter.

export default App;

