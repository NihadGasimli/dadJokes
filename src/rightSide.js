import "./rightSide.css"
import JokesList from "./jokesList"
export default function RightSide({ jokes, setJokes }) {
    return (
        <>
            <div className="rightSide">
                <JokesList jokes={jokes} setJokes={setJokes} />
            </div>
        </>
    )
}