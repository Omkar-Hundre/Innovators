// ---------------------------Navbar Menu------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const profileIcon = document.querySelector(".profile-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    // Toggle navigation menu on small screens
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Toggle profile dropdown menu
    profileIcon.addEventListener("click", () => {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        dropdownMenu.style.display = "none";
      }
    });
  });
// ----------------------------------------------------------------------------------------------


