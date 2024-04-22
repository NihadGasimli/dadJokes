import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import Joke from "./joke";

export default function JokesList({ jokes, setJokes }) {

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

    useEffect(() => {
        let jokesLocal = [];

        async function run() {
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

        if (!jokes.length) {
            run();
        }


    }, [])

    let jokesCopy = jokes.sort(function (a, b) {
        return b.vote - a.vote
    });

    return (
        <>
            {jokesCopy.map(joke => (<Joke text={joke.text} key={joke.id} vote={joke.vote} id={joke.id} setJokes={setJokes} />))}
        </>
    )
}
