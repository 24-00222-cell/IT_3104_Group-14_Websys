const message = document.getElementById("message");
const changeMessageBtn = document.getElementById("changeMessageBtn");
const changeBgBtn = document.getElementById("changeBgBtn");




const messages = [
    "Hello! Welcome to our webpage.",
    "Our Group Members are:",
    "Luis Miguel",
    "Neil Dominick",
    "Philip Florence",
];


let messageIndex = 0;

changeMessageBtn.addEventListener("click", function () {

    message.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

});

changeBgBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "rgba(248, 255, 150, 0.77)";
});
