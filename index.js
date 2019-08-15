'use strict';


function makeFizzBuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}


function handleSubmit() {
  $('#number-chooser').on('submit', function(event) {
    event.preventDefault();
    let userInput = $('#number-choice').val();

    let outputArray = [];

    for(let i=1; i <=userInput; i++) {
      outputArray.push(makeFizzBuzz(i));
    }
    makeHtml(outputArray);
  });
}

function makeHtml(outputArray) {

  let htmlArray = outputArray.map(item => `<div class="fizz-buzz-item ${item}">
  <span>${item}</span> </div>`);
  
  $('.js-results').html(htmlArray);
  
}

$(handleSubmit);
