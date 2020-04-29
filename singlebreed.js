function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => {
      console.log('Something went wrong.');
    });
}

function displayResults(json) {
  console.log(json);

  let html = '';
  if (json.status === 'success') {
    html = `<div><img src="${json.message}"></div>`;
  } else {
    html = `<p>${json.message}</p>`;
  }
  $('#results').html(html);
}

function handleSubmit() {
  $('#breedForm').submit(function(e) {
    e.preventDefault();
    let breed = $('#breed').val();
    getDogImage(breed);
  });
}

$( document ).ready(function() {
  handleSubmit();
});
