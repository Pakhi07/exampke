var sold=
       [Math.floor(Math.random() * (100 - 20 + 1)) + 20,
        Math.floor(Math.random() * (80 - 1 + 1)) + 1,
        Math.floor(Math.random() * (90 - 20 + 1)) + 20,
        Math.floor(Math.random() * (50 - 40 + 1)) + 40,
        Math.floor(Math.random() * (85 - 20 + 1)) + 20]

var ctx = document.getElementById("myChart").getContext("2d");

var xValues = 
        ["Pepperoni",
         "Farmhouse",
         "Veggie Paradise",
         "Peppy Panner",
         "VEGGIE PARADISE"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:
                 ['rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'],
      borderColor: 
                 ['rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'],
      borderWidth: 1,
      data: sold
    }]
  },
    options: {
      layout: {
        padding: {
          left: 250,
          top: 10
        }
      },
    legend: {display: false},
    title: {
      display: true,
      text: "PIZZA SALE"
    }
  }
});

