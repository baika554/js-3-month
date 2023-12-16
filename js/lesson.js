// home work 1 lesson 3

const tabContBlock = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentIndex = 0;

const hideTabContent = () => {
    tabContBlock.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContBlock[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
    currentIndex = tabIndex;
}

const changeSlide = () => {
    currentIndex = (currentIndex + 1) % tabs.length;
    hideTabContent();
    showTabContent(currentIndex);
}

const slideInt = setInterval(changeSlide, 3000);
hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                clearInterval(slideInt);
                hideTabContent();
                showTabContent(tabIndex);
                slideInt.setInterval(changeSlide, 3000); 
            }
        })
    }
}

