var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input")
var elOutput = document.querySelector(".js-result");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  var inputValue = Number(elInput.value);
  if (inputValue % 3 == 0 && inputValue % 5 == 0 ){
    elOutput.textContent = "FizzBuzz";
  }
  else if (inputValue % 3 == 0){
    elOutput.textContent = "Fizz";
  }
  else if (inputValue % 5 == 0){
    elOutput.textContent = "Buzz";
  }
  else {
    elOutput.textContent = `${inputValue} soni 3 ga ham 5 ga ham bo'linmaydi`;

  }
  elInput.value = "";
})
