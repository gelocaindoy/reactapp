import { useState, useEffect } from "react";
import { getJoke } from "../Utils/fetch";
import "./joke.css";

function JokeTime() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [DisLiked, setIsDisLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getJoke()
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="mb-3">It's Joke Time!!!</h1>
        <button className="btn btn-success mb-3" onClick={() => {
            setLoading(true);
            setError(false);
            getJoke()
              .then((data) => {
                setJoke(data);
                setLoading(false);
                setIsLiked(false);
                setIsDisLiked(false);
              })
              .catch(() => {
                setError(true);
                setLoading(false);
              });
          }}
        >Generate Jokes</button>
        <button className="btn btn-primary space mb-3" disabled={DisLiked} onClick={() => {setIsLiked(!isLiked); setLikes(likes + 1);}}>Like<num>{likes}</num></button>
        <button className="btn btn-danger space mb-3" disabled={isLiked} onClick={() => {setIsDisLiked(!DisLiked); setDislikes(dislikes + 1);}}>Unlike<num>{dislikes}</num></button>
        {/*https://reactjs.org/docs/hooks-state.html*/}
        <br />
        {loading && <div>Generating...</div>}
        {error && <div>Error loading joke</div>}
        {joke.setup && <div className="alert alert-primary p-3">Juan: {joke.setup}</div>}
        {joke.punchline && <div className="alert alert-success p-3">Pedro: {joke.punchline}</div>}
        {isLiked && (<img className="p-3" src={"https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_960_720.png"}alt="Happy Smiley"/>)}
        {DisLiked && (<img className="p-3" src={"https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635448_960_720.png"}alt="Sad Smiley"/>)}
        </div>
    </>
  );
}

//ref https://www.youtube.com/watch?v=Dorf8i6lCuk
export default JokeTime;
