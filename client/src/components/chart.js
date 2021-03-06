import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const [chartdata, setChartData] = useState({});
  // const [attributes,setAttributes]=useState([]);
  // const [score,setScore]=useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/unknown/1")
    const json = await res.json();
    console.log(json.data);
  };
  const chart = () => {
     f();
    setChartData({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart" style={{ height: "40%", width: "50%" }}>
      <Bar data={chartdata}  options={{
            indexAxis:'y',
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    drawOnChartArea: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false
                  }
                }
              ]
            }
          }} />
    </div>
  );
};

export default Chart;
