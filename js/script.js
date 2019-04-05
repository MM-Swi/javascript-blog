'use strict';

/* Zmienna z linkami i petla ktora przypisuje nasluch na event musi byc poza glowna funkcja (tittleClickHandler) 
bo inaczej nie ma sie jak odpalic tzn. nic nie dzialalo bo przypisanie bylo w funkcji, ktorej nic nie wywolywalo */
const links = document.querySelectorAll('.titles a');

// Tu miales let zamiast for
for (let link of links) {
    link.addEventListener('click', titleClickHandler);
};



function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this; //This odnosni sie do tego konkretnego elementu w ktory klikasz, sa odstepstwa ale na ta chwile tyle Ci wystarczy
    console.log('Link was clicked!');


    /* remove class 'active' from all article links  */

    const activeArticles = document.querySelectorAll('.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    for (let activeArticle of activeArticles) {
        clickedElement.classList.add('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');


    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle)

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');


}