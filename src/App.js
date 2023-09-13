import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TeluguMovies from "./Components/TeluguMovies";
import TamilMovies from "./Components/TamilMovies";
import MalayalamMovies from "./Components/MalayalamMovies";
import EnglishMovies from "./Components/EnglishMovies";
import KannadaMovies from "./Components/KannadaMovies";
import HindiMovies from "./Components/HindiMovies";
import MoviesList from "./Components/MovieList";
import { Button } from "antd";
// import MovieList from "./Components/MovieList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>
            <strong>Movies</strong>
          </h1>
          <br />
          <p>
            Welcome to the Movies App! Explore a wide range of movies from
            different languages and genres.
          </p>
          <p>
            Discover the latest Telugu, English, Hindi, Malayalam, Tamil, and
            Kannada movies right here.
          </p>
          <hr style={{ width: "50%" }} />
        </header>
        <div>
          <section id="about">
            <MoviesList />
          </section>
          <hr />
          <section className="main-content">
            <article
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Link to="/TeluguMovies">
                <Button
                  className="MovieNames"
                  // onClick={() => handleLanguageChange("Telugu")}
                >
                  TeluguMovies
                </Button>
              </Link>
              <Link to="/EnglishMovies">
                <Button
                  className="MovieNames"
                  // onClick={() => handleLanguageChange("English")}
                >
                  EnglishMovies
                </Button>
              </Link>
              <Link to="/HindiMovies">
                <Button className="MovieNames">HindiMovies</Button>
              </Link>
              <Link to="/MalayalamMovies">
                <Button className="MovieNames">MalayalamMovies</Button>
              </Link>
              <Link to="/TamilMovies">
                <Button className="MovieNames">TamilMovies</Button>
              </Link>
              <Link to="/KannadaMovies">
                <Button className="MovieNames">KannadaMovies</Button>
              </Link>
            </article>
          </section>
        </div>
      </div>
      <Switch>
        <Route path="/TeluguMovies" component={TeluguMovies} />
        <Route path="/EnglishMovies" component={EnglishMovies} />
        <Route path="/HindiMovies" component={HindiMovies} />
        <Route path="/MalayalamMovies" component={MalayalamMovies} />
        <Route path="/TamilMovies" component={TamilMovies} />
        <Route path="/KannadaMovies" component={KannadaMovies} />
      </Switch>
    </Router>
  );
}

export default App;
