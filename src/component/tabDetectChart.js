import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TabDetectChart = () => {
  const labels = [
    "2002-01-11",
    "2002-01-12",
    "2002-01-13",
    "2002-01-12",
    "2002-01-13",
    "2002-01-12",
    "2002-01-13"
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Exit",
        data: [1,85],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Enter",
        data: [33,70,45,11,11],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Inside",
        data: [99,70],
        borderColor: "rgb(206, 222, 27)",
        backgroundColor: "rgba(206, 222, 27, 0.5)",
      },
    ],
  };
  return (
    <>
      <Line data={data}></Line>
    </>
  );
};
export default TabDetectChart;
