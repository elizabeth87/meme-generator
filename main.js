const imgInput = document.querySelector('#img-input')
const headerInput = document.querySelector('#header-input');
const footerInput = document.querySelector('#footer-input');
const inputBtn = document.querySelector('.submit-btn');

inputBtn.addEventListener('click', buttonClicked);


function buttonClicked() {
  console.log('Values for the three input text boxes:')
  createMeme(imgInput.value, headerInput.value, footerInput.value);
  imgInput.value=''; 
  headerInput.value='';
  footerInput.value='';
};

function removeButtonClicked(event) {
  let memeSection = document.querySelector('.meme');
  let btn = event.target;
  let memeImg = btn.parentNode;
  memeSection.removeChild(memeImg);
}



function createMeme(imgURL, headerText, footerText) {
  /* We'll need the div img-wrapper so we canadd the image and h1 elements to it */

  
  let imgWrapper = document.createElement('div');
  imgWrapper.classList.add('img-wrapper');
  
//   /* Create the h1 with the class of meme-header */
  let header = document.createElement('h1');
  header.textContent = headerText;
  header.classList.add('meme-header');
  
//   /* Create the h1 with the class of meme-footer */
  let footer = document.createElement('h1');
  footer.textContent = footerText;
  footer.classList.add('meme-footer');
  
//   /* Create the img, apply the src value provided, and add the class meme-img */
  let memeImg = document.createElement('img');
  memeImg.src = imgURL;
  memeImg.classList.add('meme-img');
  
  let removeButton = document.createElement('button');
  removeButton.classList.add('delete-meme');
  removeButton.textContent ='X';
  removeButton.addEventListener('click', removeButtonClicked);
  /* With all three of these elements created, we can now attach them to the img-wrapper div: */
  imgWrapper.appendChild(header);
  imgWrapper.appendChild(footer);
  imgWrapper.appendChild(memeImg);
  imgWrapper.appendChild(removeButton);
  let memeSection = document.querySelector('.meme');
  memeSection.appendChild(imgWrapper);
}
