// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement;
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton;
    this.expandButton = document.querySelector(".expand-button");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", expandArticle)
  }

  expandArticle() {
    expandArticle(event)
      event.classList.toggle(".expand-button");
    }
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }


//  START HERE: 

//  Select all classes named ".article" and assign that value to the articles variable.  
let article = document.querySelectorAll(".article");
//  With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.


let articles;