import LeftSide from "./leftSide";
import RightSide from "./rightSide"
import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';
import "./app.css"

function App() {
  const [jokes, setJokes] = useState(JSON.parse(localStorage.getItem('jokes')) || []);

  const getJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });

      return response.data.joke
    }
    catch (err) {
      console.log(err)
    }
  }

  function setNewJokes() {

    window.localStorage.removeItem("jokes")

    async function run() {
      let jokesLocal = [];
      for (let i = 0; i < 15; i++) {
        const joke = await getJoke();

        jokesLocal.push({
          id: uuid(),
          text: joke,
          vote: 0
        })
      }
      setJokes(jokesLocal);
      window.localStorage.setItem("jokes", JSON.stringify(jokesLocal));
    }

    run();

  }

  return (
    <>
      <div className="container">
        <div className="main">
          <LeftSide setNewJokes={setNewJokes} />
          <RightSide jokes={jokes} setJokes={setJokes} />
        </div>

      </div>
    </>
  );
}

export default App;
