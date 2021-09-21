let numbers = process.argv.slice(2)
const timer = function (timerDelay) {


    if (!isNaN(timerDelay) && timerDelay > 0) {

        setTimeout(() => { console.log(`${timerDelay} beep`) }, timerDelay * 1000);

    }
}
for (const elm of numbers) {
    timer(elm)
}
