function verification(inputValue) {
    if (inputValue.value === "") {
        alert("The guess area should not be empty!!");
        return false;
    }
    return true;
}

export default verification;