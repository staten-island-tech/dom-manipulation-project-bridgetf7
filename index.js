const DOMSelectors = {
  birthYear: document.getElementById("birthYear"),
  submit: document.getElementById("submit"),
  reset: document.getElementById("reset"),
};

console.log(DOMSelectors);

function submitform() {
  const birthYear = document.getElementById("birthYear");
  const zodiacResult  = 
  "<p>You were born in the year of the pig!</p>";
  birthYear.insertAdjacentHTML("afterend", zodiacResult);
}

 function resetform() {
      document.getElementById("form").reset();
}

