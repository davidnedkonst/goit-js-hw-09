// Data

const ATTRIBUTE_DISABLED = "disabled";
const start = "data-start";
const stop = "data-stop";

refs = {
    body: document.querySelector("body"),
    buttonStart: document.querySelector("button[data-start]"),
    buttonStop: document.querySelector("button[data-stop]"),
    divButtons: document.querySelector("#buttons")
};

// Functions

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonStart() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onButtonStop() {
    clearInterval(timerId);
    refs.body.style.backgroundColor = "";
}

function disableButton(event) {
    if (event.target.hasAttribute(start)) {
        refs.buttonStart.setAttribute(ATTRIBUTE_DISABLED, "");
        refs.buttonStop.removeAttribute(ATTRIBUTE_DISABLED);

    }
    if (event.target.hasAttribute(stop)) {
        refs.buttonStop.setAttribute(ATTRIBUTE_DISABLED, "");
        refs.buttonStart.removeAttribute(ATTRIBUTE_DISABLED);
    }
}

function onButton(event) {
    console.log("Click on " + event.target.textContent);

    if (event.target.hasAttribute(start)) {
        onButtonStart();
    }
    if (event.target.hasAttribute(stop)) {
        onButtonStop();
    }

    disableButton(event);
}

//Main

let timerId = null;

refs.buttonStop.setAttribute(ATTRIBUTE_DISABLED, "");

refs.divButtons.addEventListener("click", onButton);