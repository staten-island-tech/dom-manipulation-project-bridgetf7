const DOMSelectors = {
    submit: document.getElementById("submit"),
    box: document.getElementById("container"),
    albumName: document.querySelector("#albumName"),
    artistName: document.querySelector("#artistName"),
    image: document.querySelector("#image"),
    form: document.getElementById("form"),
};

console.log(DOMSelectors);

//does something when the "submit" button is hit
DOMSelectors.submit.addEventListener("click", function (e) {
    e.preventDefault();

    //provides the values for inputs 
    const albumName = DOMSelectors.albumName.value;
    const artistName = DOMSelectors.artistName.value;
    const image = DOMSelectors.image.value;


    //outputs a card when submit button is hit 
    DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
       <div id = "outputParent">
       <div id = "outputCard"> 
       <p>${albumName}</p> 
       <p class=image ><img src= ${image}><br><br> 
       <p>${artistName}</p> 
       <button type="button" id="clear">clear</button>
       </div>
       </div>`
    );

    //clears input values on form
    DOMSelectors.albumName.value = "";
    DOMSelectors.artistName.value = "";
    DOMSelectors.image.value = "";

    //clears result 
    const clear = document.getElementById("clear");
    const outputCard = document.getElementById("outputCard");
    clear.addEventListener("click", function () {
        outputCard.remove();
    });
});

//https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/