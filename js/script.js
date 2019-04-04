'use strict';

function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    const activeArticles = document.querySelectorAll('.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* add class 'active' to the clicked link */

    let (activeArticle of activeArticles) {
        activeArticle.classList.add('active')
    };
    console.log('clickedElement:', clickedElement);

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */


    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
