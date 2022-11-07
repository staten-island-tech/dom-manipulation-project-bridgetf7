const DOMSelectors = {
    birthYear: document.getElementById("birthYear"),
    buttons: document.querySelector(".buttons"),
    box: document.getElementById("box"),
};

console.log(DOMSelectors);


function resetform() {
    document.getElementById("box").reset();
}
