import { useEffect, useState } from "react";
import './App.css';

function App() {
  
  const APIKey = "793d85827e162e26a65fde3fa1dd7975";
  const city = ["London", "Yerevan", "Seoul", "New York", "Paris"];

  const [apiData, setApiData] = useState();
  const [posts, setPosts] = useState([]);
  let [guess, setGuess] = useState('');
  let [cityIndex, setCityIndex] = useState(0);
  let [result, setResult] = useState(0);

  useEffect(() => {
    const currentCity = city[cityIndex];
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.main.temp); 
      })
      .catch((err) => {
        console.error(err.message);
      });
  });

  const addPosts = () => { 
    if (guess === "") {
      alert("The guess area should not be empty!!");

      return
    }

    if(apiData + 5 >= parseFloat(guess) && apiData - 5 <= parseFloat(guess)){ 
      setPosts((posts) => [...posts, { guess, temp: apiData, isValid: true }]);
      setResult(++result);
    }else{ 
      setPosts((posts) => [...posts, { guess, temp: apiData, isValid: false }]); 
    } 
    setCityIndex(++cityIndex);
    setGuess('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts();
  };

  const newGame = () => {
    setApiData('');
    setPosts([]);
    setGuess('');
    setCityIndex(0);
    setResult(0);
  }

  if (cityIndex === 5) {
    if (result >= 2) {
      return (
        <div>
          <span>You win</span>
          <button onClick={newGame}>New Game</button>
        </div>
      );
    } else {
      return (
        <div>
          <span>You lost</span>
          <button onClick={newGame}>New Game</button>
        </div>
      );
    }
  }

  return (
    <div className="app">
      <div>
        <h1>Main area box</h1>
        <p className="city-name">{city[cityIndex]}</p>
        <input
          type="text"
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
          placeholder="Your guess text book"
          className="input-value"
        />
        <button type="submit" onClick={handleSubmit} className="button">
          Check
        </button>
      </div>
      <div className="guesses">
      {posts.map((post, index) => (
          <div key={index}>
            {post.isValid ? (
              <>
              <span className="guess-temp correct">{post.guess}</span>
              <span className="correct-temp correct">Was {post.temp}</span>
              </>
            ) : (
              <>
              <span className="guess-temp wrong">{post.guess}</span>
              <span className="correct-temp wrong">Was {post.temp}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
