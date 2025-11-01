import React from "react";
import ReactDOM from "react-dom";
import { usestate } from "react";

function Greeting(){
    return <h1>My Movie Watchlist</h1>
}

function TextBox(){
    return <textarea placeholder="Add a movie..."></textarea>
}

function MyButton(){
    return <button>Submit Movie</button>
}

function App(){

    return(

        <div>


        </div>
    );
}

function MyList(){


}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


