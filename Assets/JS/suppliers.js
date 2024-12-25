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




























const ctx = document.getElementById('supplierRadarChart').getContext('2d');
const supplierRadarChart = new Chart(ctx, {
type: 'radar',
data: {
    labels: ['Delivery Time (Days)', 'Delivery Consistency (%)', 'Quality Score (1-5)'],
    datasets: [{
    label: 'Alpha Supplies',
    data: [
        normalizeDeliveryTime(3),       // 3 days -> normalize to 0-100 scale
        normalizeDeliveryConsistency(98), // 98% -> already in 0-100 range
        normalizeQualityScore(4.8)      // 4.8 -> normalize to 0-100 scale
    ],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
    }, {
    label: 'Beta Manufacturing',
    data: [
        normalizeDeliveryTime(5),       // 5 days -> normalize to 0-100 scale
        normalizeDeliveryConsistency(85), // 85% -> already in 0-100 range
        normalizeQualityScore(4.2)      // 4.2 -> normalize to 0-100 scale
    ],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
    }, {
    label: 'Gamma Enterprises',
    data: [
        normalizeDeliveryTime(2),       // 2 days -> normalize to 0-100 scale
        normalizeDeliveryConsistency(95), // 95% -> already in 0-100 range
        normalizeQualityScore(4.7)      // 4.7 -> normalize to 0-100 scale
    ],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
    }, {
    label: 'Delta Solutions',
    data: [
        normalizeDeliveryTime(4),       // 4 days -> normalize to 0-100 scale
        normalizeDeliveryConsistency(70), // 70% -> lower consistency
        normalizeQualityScore(3.5)      // 3.5 -> moderate score
    ],
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)',
    borderWidth: 1
    }, {
    label: 'Epsilon Corp',
    data: [
        normalizeDeliveryTime(1),       // 1 day -> normalize to 0-100 scale
        normalizeDeliveryConsistency(50), // 50% -> low consistency
        normalizeQualityScore(2.0)      // 2.0 -> low quality score
    ],
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1
    }]
},
options: {
    scale: {
    ticks: {
        beginAtZero: true,
        max: 100 // Now all data points will be scaled to 100 for comparison
    }
    },
    responsive: true,
    maintainAspectRatio: false
}
});

// Normalize the Delivery Time to 0-100 range (assuming max delivery time is 5 days)
function normalizeDeliveryTime(days) {
return (1 - days / 5) * 100; // 0-100 scale
}

// Normalize Delivery Consistency (already in percentage)
function normalizeDeliveryConsistency(percentage) {
return percentage; // Already in the 0-100 range
}

// Normalize the Quality Score to 0-100 range (assuming max score is 5)
function normalizeQualityScore(score) {
return (score - 1) * 25; // 1-5 scale -> 0-100 scale
}
