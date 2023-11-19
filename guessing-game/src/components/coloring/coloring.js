function coloring(tempValue, inputValue) {
    let guessTemp = document.querySelectorAll(".guess-temp");
    let correctTemp = document.querySelectorAll(".correct-temp");


    if (tempValue + 5 >= parseFloat(inputValue.value) && tempValue - 5 <= parseFloat(inputValue.value)) {
        guessTemp[guessTemp.length - 1].classList.add("correct");
        correctTemp[correctTemp.length - 1].classList.add("correct");
    } else {
        guessTemp[guessTemp.length - 1].style.color = "red";
        correctTemp[correctTemp.length - 1].style.color = "red";
    }
    
}

export default coloring;