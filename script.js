// Dropdown Menu

let arrow = document.getElementById("menuArrow"); // Icon'un seçilmesi
let dropdownMenu = document.getElementById("dropdownMenu"); // Menünün seçilmesi

arrow.addEventListener("click", openDropdownMenu); // Icon'a click event'inin atanması

function openDropdownMenu(e) {
  //   debugger;
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
  }

  e.preventDefault();
}

// Notifications

let dropdownNotifications = document.getElementById("dropdownNotifications"); // Menünün seçilmesi
let notifications = document.getElementById("notifications"); // Icon'un seçilmesi

notifications.addEventListener("click", openNotificationsMenu); // Icon'a click event'inin atanması

function openNotificationsMenu(e) {
  if (dropdownNotifications.style.display === "none") {
    dropdownNotifications.style.display = "flex";
  } else {
    dropdownNotifications.style.display = "none";
  }

  e.preventDefault();
}

// User menu

let dropdownUser = document.getElementById("dropdownUser"); // Menünün seçilmesi
let userIcon = document.getElementById("userIcon"); // User Picture ın seçilmesi
let ellipseIcon = document.getElementById("ellipseIcon"); // Ellipse in seçilmesi

userIcon.addEventListener("click", openUserMenu); // User Picture a click event'inin atanması
ellipseIcon.addEventListener("click", closeUserMenu); //Ellipse click event'inin atanması

function openUserMenu(e) {
  if (dropdownUser.style.display === "none") {
    dropdownUser.style.display = "flex";
  } else {
    dropdownUser.style.display = "none";
  }

  e.preventDefault();
}

function closeUserMenu(e) {
  if (dropdownUser.style.display === "flex") {
    dropdownUser.style.display = "none";
  }

  e.preventDefault();
}

// Searchbar

let searchbar = document.getElementById("searchbar"); // Searchbar'ın seçilmesi
let searchIcon = document.getElementById("searchIcon"); // Search icon'un seçilmesi
let crossIcon = document.getElementById("crossIcon"); // Cross icon'un seçilmesi

searchIcon.addEventListener("click", openSearchbar); // Search icon'a click event'inin atanması
crossIcon.addEventListener("click", closeSearchbar); //Cross icon'a click event'inin atanması

function openSearchbar(e) {
  if (searchbar.style.display === "none") {
    searchbar.style.display = "flex";
  } else {
    searchbar.style.display = "none";
  }

  e.preventDefault();
}

function closeSearchbar(e) {
  if (searchbar.style.display === "flex") {
    searchbar.style.display = "none";
  }

  e.preventDefault();
}
