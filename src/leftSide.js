import "./leftSide.css";
export default function LeftSide({ setNewJokes }) {

    return (
        <>
            <div className="leftSide">
                <div className="text">
                    <h1 className="dadText">Dad</h1>
                    <h1 className="jokesText">JOKES</h1>
                </div>
                <span className="emojiLeftSide">&#128514;</span>
                <button className="newJokesBtn" onClick={setNewJokes}>New Jokes</button>
            </div>
        </>
    )
}