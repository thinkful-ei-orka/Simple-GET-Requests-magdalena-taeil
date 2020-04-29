// https://dog.ceo/api/breeds/image/random/3 Fetch!

function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => console.log('Something went wrong.'));
}

function displayResults(json) {
  console.log(json);
}

function handleSubmit() {
  $('#numDogsForm').submit(function(e) {
    e.preventDefault();
    let numDogs = $('#numDogs').val();
    if (numDogs > 50 || numDogs < 1) {
      alert('Please enter a number of dogs in between 1 and 50.');
    } else {
      getDogImages(numDogs);
    }
  });
}

$( document ).ready(function() {
  handleSubmit();
});
