//-------------------------------------------------------------------//
//  Variables

const mainCard = document.querySelector('.rating-view');
const loadingCard = document.querySelector('.loading');
const thankCard = document.querySelector('.thank-you-view');
const submitBtn = document.querySelector('.submit-btn');
const rating = document.getElementById('rating');
const buttons = document.querySelectorAll('.rate-btn');

//-------------------------------------------------------------------//
//  Event Listeners

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    rating.innerHTML = button.innerHTML;
    e.preventDefault();
  })
});


submitBtn.addEventListener('click', (e) => {
  
  if (rating.innerHTML === '') {
    alert('Please select a rating');
  } else {
    mainCard.style.display = 'none';
    loadingCard.style.display = 'flex';

    setTimeout(screenChange, 1000);
  }

  e.preventDefault();
});

function screenChange() {
  mainCard.style.display = 'none';
  loadingCard.style.display = 'none';
  thankCard.style.display = 'flex';
}