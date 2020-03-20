// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {
  let likeLi = document.querySelectorAll('li.like')
  for (const like of likeLi) {
  like.addEventListener('click', event => {
    console.log(event.target.lastChild)
    updateHeart(event.target.lastChild)
  })
}
})

function updateHeart (target){
  target.classList.add('activated-heart')
  target.innerHTML = FULL_HEART
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
