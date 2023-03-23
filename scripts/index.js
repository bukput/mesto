let buttonPopupOpen = document.querySelector('.profile__popup');
let popupBox = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openPopup(){
  popupBox.classList.add('popup_opened');
}

 function closePopup(){
  popupBox.classList.remove('popup_opened');
 }

 buttonPopupClose.addEventListener('click',closePopup);

 popupForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
 })

 buttonPopupOpen.addEventListener('click', () =>{
  openPopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})