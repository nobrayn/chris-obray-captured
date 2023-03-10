// creating a (more) functional form with JS
// two forms, a comment form on the blog page and a contact form on the contact page


// comment form
// grab form element
const commentFormElement = document.getElementById('commentForm');
// add an event listener for the the button when clicked
commentFormElement.addEventListener('submit', function(e) {

  // prevent default form submission behaviour (refresh page)
  e.preventDefault();
  // console.log('form submitted!')
  
  // isolate each of the fields and save to variables
  const commentForm = document.querySelector('form');
  const commentName = document.querySelector('#commentName');
  const commentEmail = document.querySelector('#commentEmail');
  const commentMessage = document.querySelector('#commentMessage');
  console.log(commentName.value)

  // create comment element
  const commentEl = document.createElement('div');
  commentEl.classList.add('comment');
  document.querySelector('.comments').appendChild(commentEl)

  // create img element
  const pImg = document.createElement('img');
  pImg.src = "https://i.pravatar.cc/92?";
  commentEl.appendChild(pImg);

  // create p element for date and name
  const pElNameDate = document.createElement('p');
  // create variable for current date and time 
  const d = new Date();
  // need to fix day of week formatting
  // console.log(d.toDateString());
  
  // append p element with string that includes date and time, "by" commentName
  pElNameDate.textContent = `${d.toDateString()} by ${commentName.value}`;
  commentEl.appendChild(pElNameDate);
  console.log(commentName)
  
  
  // create p element for message
  const pElMessage = document.createElement('p');
  pElMessage.textContent = commentMessage.value;
  commentEl.appendChild(pElMessage);

  // clear form after submission
  alert('Thank you!')
  commentFormElement.reset()
});





