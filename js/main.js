document.getElementById('convertButton').onclick = convertFunction

function convertFunction(){

    temp = document.getElementById('userInput').value

    result = temp * 1.8 + 32

    document.getElementById('tempResult').innerText = result

}