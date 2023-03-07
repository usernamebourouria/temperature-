
import {useState} from 'react';
import './App.css';

import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function App() {
  const [data, setData]= useState({
    labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:'temperature',    //lena bache tzidche label wahda okra
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor:'#2e4355',
        borderColor:'white',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#243240',
        showLine:true
      }
      
    ]
  })
  return (
    <div className="App" >
      <h2>temperature</h2>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default App;