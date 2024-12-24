import React from 'react'
import Header from '../../Component/Header/Header';
import DashboardTable from '../../Component/Table/DashboardTable/DashboardTable';



export default function Department() {
  return (
    <>
    <Header/>
     <main className='page-container'>
     
      <h1 align='center'> Department </h1>
      <DashboardTable/>
      
    </main>

    </>
  )
}
