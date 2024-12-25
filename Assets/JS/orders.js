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




















const ctx = document.getElementById('orderChart').getContext('2d');
  
const orderChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Completed', 'Delayed', 'Canceled'],
    datasets: [{
    label: 'Orders',
    data: [1800, 400, 300],  // Data for completed, delayed, and canceled orders
    backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
    ],
    borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
    }]
},
options: {
    scales: {
    y: {
        beginAtZero: true,
        ticks: {
        stepSize: 500  // Adjust step size for y-axis
        }
    }
    },
    responsive: true,
    aspectRatio: 2,
    plugins: {
    legend: {
        position: 'top',
    }
    }
}
});