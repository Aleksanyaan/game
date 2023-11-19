import { useEffect, useState } from "react";

function App() {
  
  const APIKey = "793d85827e162e26a65fde3fa1dd7975";
  const [guess, setGuess] = useState('');
  const [cityIndex, setCityIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const city = ["London", "Yerevan", "Seoul", "New York", "Paris"][cityIndex];
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=793d85827e162e26a65fde3fa1dd7975`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGuess(data.main.temp); // assuming you want to store the temperature as the guess
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [cityIndex]);

  const addPosts = async (temp) => {
    const city = ["London", "Yerevan", "Seoul", "New York", "Paris"][cityIndex];
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`, {
      method: 'POST',
      body: JSON.stringify({
        temp: temp,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [...posts, { guess: temp, temp: data.main.temp }]);
        setGuess('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(guess);
  };

  return (
    <div className="app">
      <div>
        <h1>Main area box</h1>
        <p className="city-name"></p>
        <input
          type="text"
          onChange={(e) => setGuess(e.target.value)}
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
            <span className="guess-temp">{post.guess}</span>
            <span className="correct-temp">Was {post.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
