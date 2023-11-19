import { useState } from "react";

function PostData() {
    const APIKey = "793d85827e162e26a65fde3fa1dd7975";
    const [temp, setTemp] = useState('');
    const [guess, setGuess] = useState([]);
    const [cityIndex, setCityIndex] = useState(0);

    // const addPosts = async (temp) => {
    //     const city = ["London", "Yerevan", "Seoul", "New York", "Paris"][cityIndex];
    //     await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             temp: temp
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setGuess((guess) => [data, ...guess]);
    //         setTemp('');
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addPosts(temp);
    // };    
}

export default PostData;