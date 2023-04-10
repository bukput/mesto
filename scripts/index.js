const buttonPopupOpen = document.querySelector('.profile__popup');
const popupProfileBox = document.querySelector('.popup_profile');
const buttonPopupProfileClose = document.querySelector('.popup__close_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupForm = document.querySelector('.popup__form_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


function openPopup(popup){
  popup.classList.add('popup_opened');
}

 function closePopup(popup){
  popup.classList.remove('popup_opened');
 }

 buttonPopupProfileClose.addEventListener('click',() =>{
  closePopup(popupProfileBox);
 });

 popupForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileBox);
 })

 buttonPopupOpen.addEventListener('click', () =>{
  openPopup(popupProfileBox);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})

const buttonAdd = document.querySelector('.profile__button-add');
const boxAddImg = document.querySelector('.popup_img');
const boxCloseImg = document.querySelector('.popup__close_img');

boxCloseImg.addEventListener('click',() =>{
  closePopup(boxAddImg);
 });

 const nameInputAdd = document.querySelector('.popup__input_type_text');
 const linkInputAdd = document.querySelector('.popup__input_type_link');

 buttonAdd.addEventListener('click', () =>{
  openPopup(boxAddImg);
  nameInputAdd.value = '';
  linkInputAdd.value = '';
})

const itemTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const popupFullScreen = document.querySelector('.popup-fullScreen');
const popupFullScreenClose = document.querySelector('.popup-fullScreen__close');

function handleDelete(event){
  const card = event.target.closest('.element');
  card.remove();
}

 function handleLike(event){
  const like = event.target.closest('.element__button');
  like.classList.toggle('element__button-active');
 }

 const elementFullScreenImg = document.querySelector('.popup-fullScreen__img');
 const elementFullScreenCaption = document.querySelector('.popup-fullScreen__caption');

 function addFullScreenContent(event){
  const elementImg = event.target.closest('.element__image');
  openPopup(popupFullScreen);
  elementFullScreenImg.src = elementImg.src;
  elementFullScreenImg.alt = elementImg.alt;
  elementFullScreenCaption.textContent = elementImg.alt;
}

function setEventListeners(htmlElement){
  htmlElement.querySelector('.element__button-trash').addEventListener('click', handleDelete);
  htmlElement.querySelector('.element__button').addEventListener('click',handleLike);
  htmlElement.querySelector('.element__image').addEventListener('click', addFullScreenContent);
}

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageName = htmlElement.querySelector('.element__image');
  const imageAlt = htmlElement.querySelector('.element__image');
  const imageText = htmlElement.querySelector('.element__text');
  imageName.src = item.link;
  imageAlt.alt = item.name;
  imageText.textContent = item.name;
  setEventListeners(htmlElement);
  return htmlElement;
};

initialCards.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.prepend(elementCreate);
});

 
 const popupFormImg = document.querySelector('.popup__form_img');

popupFormImg.addEventListener('submit',(event)=>{
  event.preventDefault();
  const elementAddNew = {
    name: nameInputAdd.value,
    link: linkInputAdd.value
  };
  elements.prepend(createCard(elementAddNew));
  closePopup(boxAddImg);
 })

 popupFullScreenClose.addEventListener('click',() =>{
  closePopup(popupFullScreen);
 })