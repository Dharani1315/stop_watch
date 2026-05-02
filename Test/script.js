let hour = 0;
let minute = 0;
let seconds = 0;
let count = 0;
let timmer = true;

const timmerEl = document.getElementById("timer");

function stopWatch() {

    if (timmer) {

        count++;

        if (count == 100) {
            seconds++;
            count = 0;
        }

        if (seconds == 60) {
            minute++;
            seconds = 0;
        }

        if (minute == 60) {
            hour++;
            seconds = 0;
            minute = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = seconds;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (seconds < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        let html = `
            <p>${hrString}:${minString}:${secString}</p>
            <span>${countString}</span>
        `;

        timmerEl.innerHTML = html;
    }
}



// ======================
// TEST CASE 1
// ======================

function runTest1() {

    console.clear();

    hour = 0;
    minute = 0;
    seconds = 0;
    count = 0;

    stopWatch();

    console.log("TEST CASE 1");
    console.log("Expected Count = 1");

    console.log("Hour:", hour);
    console.log("Minute:", minute);
    console.log("Seconds:", seconds);
    console.log("Count:", count);
}



// ======================
// TEST CASE 2
// ======================

function runTest2() {

    console.clear();

    hour = 0;
    minute = 0;
    seconds = 0;
    count = 99;

    stopWatch();

    console.log("TEST CASE 2");
    console.log("Expected Seconds = 1");
    console.log("Expected Count = 0");

    console.log("Hour:", hour);
    console.log("Minute:", minute);
    console.log("Seconds:", seconds);
    console.log("Count:", count);
}