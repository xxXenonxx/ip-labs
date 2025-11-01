import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./App.css";


function Greeting() {
  return <h1>My Movie Watchlist</h1>
}
/*
function TextBox() {
  return <textarea id="movie" className="movie" placeholder="Add a movie..."></textarea>
}

function MyComment() {
  return <textarea id="comment" className="comment" placeholder="Add a comment..."></textarea>
}

function MyButton() {
  return <button>Submit Movie</button>
}

class Movie {
  constructor(name) {
    this.name = name;
    this.finished = false;
  }
}*/

function App() {

  const [movie, setMovie] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);

  function handleAddMovie() {

    const newMovie = {
      name: movie,
      comment: comment,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setMovie("");
    setComment("");
    setRating(0);
  }

  function handleDeleteMovie(index) {
  setMovies(movies.filter((_, i) => i !== index));
}

  return (

    <div>
      <Greeting />
      <textarea
        id="movie"
        className="movie"
        placeholder="Add a movie..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <textarea
        className="comment"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div>
        <div>
          <button onClick={() => setRating(1)}>⭐</button>
          <button onClick={() => setRating(2)}>⭐⭐</button>
          <button onClick={() => setRating(3)}>⭐⭐⭐</button>
          <button onClick={() => setRating(4)}>⭐⭐⭐⭐</button>
          <button onClick={() => setRating(5)}>⭐⭐⭐⭐⭐</button>
        </div>
      </div>

      <button onClick={handleAddMovie}>Submit Movie</button>
      <ul>
        {movies.map((m, index) => (
          <li key={index} onClick={() => handleDeleteMovie(index)}>

            
            <strong>{m.name}</strong> <br />
            {m.comment && <em>{m.comment}</em>} <br />
            {"⭐".repeat(m.rating)}
          </li>
        ))}
      </ul>

    </div>
  );
}

function MyList() {


}

export default App;
