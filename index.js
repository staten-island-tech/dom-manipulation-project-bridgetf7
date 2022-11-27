const DOMSelectors = {
    box: document.getElementById("container"),
    form: document.getElementById("form"),
    albumName: document.getElementById("albumName"),
    artistName: document.getElementById("artistName"),
    image: document.getElementById("image"),
    submit: document.getElementById("submit"),
};
console.log(DOMSelectors);

DOMSelectors.submit.addEventListener("click", function (e) {
    e.preventDefault();
    result();
    clearInputs();
    clearResult();
});


function result() {
    let albumName = DOMSelectors.albumName.value;
    let artistName = DOMSelectors.artistName.value;
    let image = DOMSelectors.image.value;
    DOMSelectors.box.insertAdjacentHTML(
        "afterend",
        `
    <section id="result">
    <div class="outputCard">
    <p>${albumName}</p>
    <p><img src=${image}></p>
    <p>${artistName}</p>
    <button class="buttons" id="clear">clear</button>
    </div>
   </section>
   `
    );
}

function clearInputs() {
    DOMSelectors.albumName.value = "";
    DOMSelectors.artistName.value = "";
    DOMSelectors.image.value = "";
}

function clearResult() {
    const result = document.getElementById("result");
    const clear = document.getElementById("clear");
    clear.addEventListener("click", function () {
        result.remove();
    });
}

