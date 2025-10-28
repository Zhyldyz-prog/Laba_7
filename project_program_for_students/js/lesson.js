// const phoneInput = document.querySelector('#phone_input');
// const phoneButton = document.querySelector('#phone_button');
// const phoneSpan = document.querySelector('#phone_result');
// // Метод querySelector ищет первый элемент в документе, который совпадает с указанным CSS-селектором. 
// // В данном случае селектор #phone_input — это элемент с id="phone_input". 
// // Если такой элемент найден, метод возвращает его; если нет — возвращает null.

// const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

// phoneButton.addEventListener('click', () => {
//     if (reqExp.test(phoneInput.value)) {
//         phoneSpan.innerHTML = 'Этот номер существует';
//         phoneSpan.style.color = '#7FFF00';
//     } else {
//         phoneSpan.innerHTML = 'Этот номер не существует';
//         phoneSpan.style.color = '#800000';
//     }
// });
// Российский номер
const phoneInput = document.querySelector('#phone_input_for_russian');
const phoneButton = document.querySelector('#phone_button_for_russian');
const phoneSpan = document.querySelector('#phone_result_for_russian');

const reqExp = /^\+7 [992]\d{2} \d{3}-\d{2}-\d{2}$/;

phoneButton.addEventListener('click', () => {
    if (reqExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'Этот номер существует';
        phoneSpan.style.color = '#7FFF00';
    } else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = '#800000';
    }
})


// TAB SLIDER
 const tabsContentCards = document.querySelectorAll('.tab_content_block');
 const tabsItems = document.querySelectorAll('.tab_content_item');
 const tabsItemsParents = document.querySelector('.tab_content_items');

 const highTabsContentCards = () =>{
    tabsContentCards.forEach((tabsContentCard)=>{
        tabsContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab_content_item_active')
    })
 }

 const showTabsContentCards = (indexElement = 0)=>{
    tabsContentCards[indexElement].style.display = 'flex';
    tabsItems[indexElement].classList.add('tab_content_item_active')
 }

 highTabsContentCards();
 showTabsContentCards();

 // кликабельность 
 tabsItemsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsItems.forEach((tabItem, tabItemIndex) =>{
            if(event.target === tabItem){
                highTabsContentCards()
                showTabsContentCards(tabItemIndex)
            }
        })
    }
 }


 let currentIndex = 0;// первая вскладка
 let intervalId; // Переменная для хранения интервала

 // Ф-ия для автоматического переключения

 const startAuthoSlider = ()=>{
    intervalId = setInterval(()=>{
        highTabsContentCards();
        showTabsContentCards(currentIndex);
        currentIndex = (currentIndex +1) % tabsItems.length
    }, 2000) //2 секунды (тк здесь не указывается в секундах указываем в милесекундах - 2000 =2 секунды))
 }
 //Запуск автослайдера
 startAuthoSlider()

 // Остановка слайдера при клике на вкладку
 tabsItemsParents.onclick = (event) => {
    clearInterval(intervalId);
    if (event.target.classList.contains('tab_content_item')){
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if(event.target === tabItem){
                highTabsContentCards();
                showTabsContentCards(tabItemIndex);
                currentIndex = tabItemIndex
                startAuthoSlider();
            }
        })
    }
 }




