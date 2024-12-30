import React from 'react'
import Header from '../../Component/Header/Header';
import DashboardTable from '../../Component/Table/DashboardTable/DashboardTable';


export default function Manager() {
  return (
    <>
    <Header/>
       <section className='page-container'>

      <h1 align='center'>Manager</h1>
      <DashboardTable/>

       </section>
    </>
  )
}
