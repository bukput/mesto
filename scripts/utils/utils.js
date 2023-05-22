
export function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscape);
  }
  
  
  export function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
  };
  
  
  export function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
   }