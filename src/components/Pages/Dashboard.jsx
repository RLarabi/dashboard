import React from 'react'
import './Dashboard.css'
import Sidebar from '../SideBar/SideBar'

import People from '../../images/people.png' 
import Boxe from '../../images/boxes.png'
import Package from '../../images/package.png'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,Bar } from 'recharts';
export default function Dashboard(){
  const data = [
    {name: 'Page A', uv: 4000, pv: 2300, amt: 2300},
    {name: 'Page B', uv: 5000, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 3000, pv: 2600, amt: 2600},
    {name: 'Page D', uv: 7000, pv: 2700, amt: 2700},
    {name: 'Page E', uv: 2000, pv: 2800, amt: 2800},
    {name: 'Page F', uv: 6000, pv: 2900, amt: 2900}, ];

  return ( 
    <div>
      <Sidebar/>
    <div className='d-flex flex-column rounded-start' style={{marginLeft: "14vw",maxHeight:"100vh" ,height:"100vh"}}>
      <div style={{height: "20vh" ,background: "#D5CABD"}}>
        <h1>Dashboard</h1>
      </div> 
      <div style={{marginTop:"10vh",height: "60vh" ,background: "#D5CABD",minWidth:"86vw"}}>
      <LineChart width={300} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
  </LineChart>
      </div>


    
    </div>
    </div>
  )
}
