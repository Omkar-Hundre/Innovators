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























// Dummy data for the chart
const orderData = {
    labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels (Months)
    datasets: [{
        label: 'Fulfilled Orders',
        data: [150, 120, 200, 175, 160], // Y-axis data (Number of Orders Fulfilled)
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1
    },
    {
        label: 'Fulfillment Rate (%)',
        data: [95, 90, 98, 92, 94], // Y-axis data (Fulfillment Rate in %)
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Border color
        borderWidth: 1
    }]
};

// Chart options
const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Render the chart
const ctx = document.getElementById('order-fulfillment-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: orderData,
    options: options
});
