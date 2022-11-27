const DOMSelectors = {
    submit: document.getElementById("submit"),
    box: document.getElementById("container"),
    albumName: document.querySelector("#albumName"),
    artistName: document.querySelector("#artistName"),
    image: document.querySelector("#image"),
    form: document.getElementById("form"),
};

console.log(DOMSelectors);

DOMSelectors.submit.addEventListener("click", function (e) {
    e.preventDefault();
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

    DOMSelectors.albumName.value = "";
    DOMSelectors.artistName.value = "";
    DOMSelectors.image.value = "";

    const result = document.getElementById("result");
    const clear = document.getElementById("clear");
    clear.addEventListener("click", function () {
        result.remove();
    });

});