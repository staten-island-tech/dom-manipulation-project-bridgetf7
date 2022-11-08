//object defining DOMSelectors
const DOMSelectors = {
    birthYear: document.getElementById("birthYear"),
    submit: document.getElementById("submit"),
    reset: document.getElementById("reset"),
    box: document.getElementById("box"),
    clear: document.getElementById("clear")
};


DOMSelectors.submit.addEventListener("click", function (birthYear) {

    if (birthYear == 2031, 2019, 2007, 1995, 1983) {
        DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `<p id="zodiactext"> You were born in the year of the pig!</p>
        <button type="button" id="clear">Clear</button>`
        );
    }
    else if (birthYear == 2020, 2008, 1996, 1984, 1972) {
        DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `<p id="zodiactext"> You were born in the year of the rat!</p>
        <button type="button" id="clear">Clear</button>`
        );
    }
    DOMSelectors.birthYear.value = "";
})
