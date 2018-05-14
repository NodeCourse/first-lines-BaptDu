fs = require('fs');

setInterval(write, 1000);

function write() {
    const dateTime = Date.now();
    console.log(dateTime);

    fs.appendFileSync('dateActual.txt', dateTime + '\n');

}

console.log('Loding date...');
console.log(Date.now());
