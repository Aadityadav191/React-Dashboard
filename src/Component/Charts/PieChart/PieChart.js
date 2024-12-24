import React from 'react'
import './PieChart.css'
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart() {

    const data = {
        labels: ['UK', 'USA', 'Australia', 'Europe'],
        datasets: [
          {
            label: '{} of Votes',
            data: [12, 15, 9, 5],
            backgroundColor: [
              'rgb(161,146,217)',
              'rgb(142, 124, 199)',
              'rgba(138, 139, 218, 0.73)',
              'rgba(175, 137, 237, 0.6)',
            ],
            borderColor: [
              'rgb(161,146,217)',
              'rgb(161,146,217)',
              'rgb(161,146,217)',
              'rgb(161,146,217)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',  // Positions: 'top', 'bottom', 'left', 'right'
          },
          tooltip: {
            enabled: true,  // Enable tooltips on hover
          },
        },
      };

  return (
    <>

    <main style={{ width: '300px', height: '550px' }}>

    <section>
      <h4 style={{ padding: '10px' }}>Revenue</h4>
      <Pie  options={options} data={data} />
    </section>
       

    <section>
      <div align='center' style={{ height: '100px' }}>
       <h2>$1,24,301</h2>
       <p>Lorem Ipsum is simply dummy text</p>
      </div>
    </section>


    <section>
       <hr/>
       <div align='center'>
        <button className='piechart-btn'>Send Report </button>
       </div>
    </section>

    </main> 
    </>
  )
}
