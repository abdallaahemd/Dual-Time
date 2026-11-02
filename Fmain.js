const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")


function setDate() {
    const now = new Date();

    // seconds
    // const seconds = now.getSeconds();
    // const secondsDegrees = ((seconds / 60) * 360) + 90;
    // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // //Minutes
    // const minutes = now.getMinutes();
    // const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    // minHand.style.transform = `rotate(${minsDegrees})`
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    // // Hours
    // const hours = now.getHours();
    // const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    // hourHand.style.transform = `rotate(${hourDegrees})`
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate , 1000); // to rebeat a function sevrial times every 1 second
setDate();