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














// ---------------------------Key Metrics------------------------------------------------

const ordersCtx = document.getElementById("ordersChart").getContext("2d");
new Chart(ordersCtx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Fulfilled Orders",
        data: [120, 150, 180, 200, 220],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pending Orders",
        data: [20, 15, 10, 5, 8],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,  // 2:1 width to height ratio
  },
});

// Chart.js setup for On-Time Delivery Rate
const deliveryRateCtx = document.getElementById("deliveryRateChart").getContext("2d");
new Chart(deliveryRateCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "On-Time Delivery (%)",
        data: [90, 92, 95, 93, 96],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,  // 2:1 width to height ratio
  },
});

// Chart.js setup for Inventory Levels
const inventoryCtx = document.getElementById("inventoryChart").getContext("2d");
new Chart(inventoryCtx, {
  type: "doughnut",
  data: {
    labels: ["Warehouse A", "Warehouse B", "Warehouse C"],
    datasets: [
      {
        data: [120, 80, 50],
        backgroundColor: ["#ffcd56", "#4bc0c0", "#ff6384"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,  // 2:1 width to height ratio
  },
});

// Chart.js setup for Delivery Turnaround Time (TAT)
const tatCtx = document.getElementById("tatChart").getContext("2d");
new Chart(tatCtx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "TAT (Days)",
        data: [3.5, 3.2, 3.1, 3.3, 3.0],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,  // 2:1 width to height ratio
  },
});

// Pie chart showing the percentage of damaged goods by category and location
const damageRatesCtx = document.getElementById("damageRatesChart").getContext("2d");
new Chart(damageRatesCtx, {
  type: "pie",
  data: {
    labels: ["Electronics", "Furniture", "Construction", "Textiles"],
    datasets: [
      {
        data: [30, 15, 40, 15], // Example data for percentage of damaged goods by category
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,
  },
});

// Dual-Axis chart comparing supplier delivery timeliness and material quality
const supplierMetricsCtx = document.getElementById("supplierMetricsChart").getContext("2d");
new Chart(supplierMetricsCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Delivery Timeliness (%)",
        data: [90, 92, 94, 95, 97], // Delivery timeliness data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        yAxisID: "y-axis-1",
      },
      {
        label: "Material Quality (%)",
        data: [85, 88, 89, 91, 93], // Material quality data
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        yAxisID: "y-axis-2",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,
    scales: {
      "y-axis-1": {
        type: "linear",
        position: "left",
      },
      "y-axis-2": {
        type: "linear",
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  },
});

// ----------------------------------------------------------------------------------------------









