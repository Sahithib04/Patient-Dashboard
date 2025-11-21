document.addEventListener('DOMContentLoaded', function() {

  // Example sample data for Jessica Taylor's blood pressure readings
  const diagnosis_history = [
    { month: "January", year: 2024, blood_pressure: { systolic: { value: 120 }, diastolic: { value: 80 } } },
    { month: "February", year: 2024, blood_pressure: { systolic: { value: 125 }, diastolic: { value: 82 } } },
    { month: "March", year: 2024, blood_pressure: { systolic: { value: 130 }, diastolic: { value: 85 } } },
    { month: "April", year: 2024, blood_pressure: { systolic: { value: 122 }, diastolic: { value: 79 } } },
    { month: "May", year: 2024, blood_pressure: { systolic: { value: 118 }, diastolic: { value: 77 } } }
  ];

  renderBloodPressureChart(diagnosis_history);

  function renderBloodPressureChart(history) {
    const monthOrder = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const chartData = history.slice().sort((a, b) =>
      a.year !== b.year
        ? a.year - b.year
        : monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
    );
    const labels = chartData.map(e => `${e.month} ${e.year}`);
    const systolic = chartData.map(e => e.blood_pressure.systolic.value);
    const diastolic = chartData.map(e => e.blood_pressure.diastolic.value);

    const ctx = document.getElementById('bpChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolic,
            borderColor: "#e05ed2",
            backgroundColor: "rgba(224,94,210,0.15)",
            tension: 0.4,
            pointRadius: 4
          },
          {
            label: "Diastolic",
            data: diastolic,
            borderColor: "#7168e7",
            backgroundColor: "rgba(113,104,231,0.12)",
            tension: 0.4,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: "#dbeafe" } },
          x: { grid: { display: false } }
        }
      }
    });
  }
});

