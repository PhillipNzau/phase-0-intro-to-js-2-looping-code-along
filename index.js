// Code your solutions in this file
const messages = []
function writeCards(nameArr, eventName) {
    for(let i =0; i < nameArr.length; i++) {
        messages.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}
function countDown(number) {
    while (number >=0) {
        console.log(number);
        number--;
    }
}