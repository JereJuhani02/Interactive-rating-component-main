
const buttons = document.querySelectorAll('.rating');
// This Script changes button color when clicked and undos first buttons color when new button is clicked.
buttons.forEach(rating => {
  rating.addEventListener('click', () => {
    buttons.forEach(rating => rating.classList.remove('active'));
    rating.classList.add('active');
  });
});

// This Script switches start div to end div.
function switchVisible() {
  if (document.getElementById('start')) {

    if (document.getElementById('start').style.display == 'none') {
      document.getElementById('start').style.display = 'block';
      document.getElementById('end').style.display = 'none';
    }
    else {
      document.getElementById('start').style.display = 'none';
      document.getElementById('end').style.display = 'block';
    }
  }
}

