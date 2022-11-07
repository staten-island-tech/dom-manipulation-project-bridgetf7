const DOMSelectors = {
    birthYear: document.getElementById("birthYear"),
    buttons: document.querySelector(".buttons"),
};

console.log(DOMSelectors);


function resetform() {
    document.getElementById("form").reset();
}
