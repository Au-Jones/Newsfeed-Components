

  const toggleMenu = () => {
    menu.classList.toggle("menu--open")
    // console.log('hello')
  }
  // Toggle the "menu--open" class on your menu refence. 


// Start Here: Create a reference to the ".menu" class

const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
// console.log(menu.classList)
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu
);
// console.log(menuButton)