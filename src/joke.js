import "./joke.css"
export default function Joke({
    text,
    vote,
    id,
    setJokes
}) {

    let emoji = "";

    function upVote() {
        setJokes(jokes => {
            for (let i in jokes) {
                if (jokes[i].id === id) {
                    jokes[i].vote++;

                    break;
                }
            }

            return [...jokes]
        })
    }

    function downVote() {
        setJokes(jokes => {
            for (let i in jokes) {
                if (jokes[i].id === id) {
                    jokes[i].vote--;

                    break;
                }
            }

            return [...jokes]
        })
    }
    if (vote < 0) {
        emoji = "&#128530"
    }
    else if (vote < 3) {
        emoji = "&#128528"
    }
    else if (vote < 6) {
        emoji = "&#128523"
    }
    else if (vote < 10) {
        emoji = "&#128516"
    }
    else if (vote < 14) {
        emoji = "&#128514"
    }
    else if (vote < 18) {
        emoji = "&#129315"
    }

    return (
        <>
            <div className="joke">
                <div className="voting">
                    <button onClick={upVote}>🔼</button>
                    <h1>{vote}</h1>
                    <button onClick={downVote}>🔽</button>
                </div>
                <p className="jokeText">{text}</p>
                <h1 className="emoji" dangerouslySetInnerHTML={{ __html: emoji }}></h1>
            </div >
        </>
    )
}