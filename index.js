const DOMSelectors = {
<<<<<<< HEAD
    box: document.getElementById("box"),
    inputs: document.getElementById("inputs"),
    albumName: document.getElementById("albumName"),
    artistName: document.getElementById("artistName"),
    buttons: document.getElementById("buttons"),
    submit: document.getElementById("submit"),
    image: document.getElementById("imageURL"),
    clear: document.getElementById("clear"),
    outputCard: document.getElementById("outputCard")
};
console.log(DOMSelectors)

//does something when the "submit" button is hit
DOMSelectors.submit.addEventListener("click", function () {
    //provides the values for inputs 
    const albumName = DOMSelectors.albumName.value;
    const artistName = DOMSelectors.artistName.value;
    const image = DOMSelectors.image.value;
    const inputs = DOMSelectors.inputs.values;
    //outputs a card when submit button is hit 
    DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class = "outputCard"> 
       <p>${albumName}</p> 
       <p><img src= ${image}></p> 
       <p>${artistName}</p> 
       <button type="button" id="clear">clear</button>
       </div>`
    )
});








=======
  
}
>>>>>>> d36af4020a9d400ebb4c4aa9cdbef76d4bab81d0
