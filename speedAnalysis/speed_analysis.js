let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){

    document.getElementById('inputText').value = testText;

    let userInput = document.getElementById('userInput');

    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById('output').innerHTML = "";

    startTime = new Date().getTime();

}

function endTest(){

    endTime = new Date().getTime();

    document.getElementById(userInput).readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;

    
}