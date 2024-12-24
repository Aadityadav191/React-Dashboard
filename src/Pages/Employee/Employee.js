import React from 'react'
import Header from '../../Component/Header/Header';
import DashboardTable from '../../Component/Table/DashboardTable/DashboardTable';


export default function Employee() {
  return (
    <>
    <Header/>

    <main className='page-container'>

      <h1 align='center'>Employee</h1>
      <DashboardTable/>

    </main>
    </>
  )
}
