const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton =  document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");



function calculateProfitOrLoss(initial, quantity, current){
     
    if (initial > current) {
        // write for loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        displayOutput(`this is the loss ${loss} and this is percentage: ${lossPercentage}%.`)
    } else if (current > initial) {
        // write for profit
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit/initial)*100;
    displayOutput(`this is the profit ${profit} and this is percentage: ${profitPercentage}%.`)
    } else {
        // write for no pain no gain
        displayOutput(`no pain no gain no gain no pain.`);
    }
     
}

function displayOutput(message){
    outputBox.innerText = message;
}

function clickHandler() {
var initialInput = Number(initialPrice.value);
var quantityInput = Number(stocksQuantity.value);
var currentInput = Number(currentPrice.value);

calculateProfitOrLoss(initialInput, quantityInput, currentInput);
}

checkButton.addEventListener("click", clickHandler);