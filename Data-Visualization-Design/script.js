const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  body.className = toggleSwitch.checked ? "dark" : "light";
});

// Δημιουργία του γραφήματος πίτας
function createPieChart() {
  const ctx = document.getElementById("pieChartCanvas").getContext("2d");
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Blue', 'Pink', 'Light Blue'],
      datasets: [{
        label: 'User Distribution',
        data: [40, 35, 25], // Χρόνος κατανομής χρηστών
        backgroundColor: ['#00bcd4', '#ff4081', '#2196f3'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: true,
        }
      }
    }
  });
}

createPieChart();

// Δημιουργία του γραφήματος Bar
function createBarChart() {
  const ctx = document.getElementById("barChartCanvas").getContext("2d");

  new Chart(ctx, {
    type: "bar", // Είδος γραφήματος
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Revenue",
        data: [40, 60, 80, 30, 50, 70],
        backgroundColor: [
          "#00bcd4", "#2196f3", "#ff4081", 
          "#00bcd4", "#2196f3", "#ff4081"
        ],
        borderColor: "#fff",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          enabled: true,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  });
}

createBarChart();
