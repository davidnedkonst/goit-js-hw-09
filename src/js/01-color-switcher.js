// Data

refs = {
    body: document.querySelector("body"),
    buttonStart: document.querySelector("button[data-start]"),
    buttonStop: document.querySelector("button[data-stop]"),
    divButtons: document.querySelector("#buttons")
};

let timerId = null;

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
    const start = "data-start";
    const stop = "data-stop";
    const ATTRIBUTE_DISABLED = "disabled";

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

    const start = "data-start";
    const stop = "data-stop";

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

refs.buttonStop.setAttribute("disabled", "");

refs.divButtons.addEventListener("click", onButton);