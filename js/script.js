'use strict';

const links = document.querySelectorAll('.titles a'); /* Poza główną funkcjątitleClickHandler */

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}


function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event)

    /* remove class 'active' from all article links  */

    const activeArticles = document.querySelectorAll('.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* add class 'active' to the clicked link */

    for (let activeArticle of activeArticles) {
        clickedElement.classList.add('active');
    }
    console.log('clickedElement:', clickedElement);

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('href')

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle)


    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

}
