import React ,{useState}from 'react'
import Sidebar from '../../components/layout/Sidebar.jsx'
import Header from '../../components/layout/Header.jsx'


const AppLayout = ({children}) => {
  const[isSidebarOpen,setisSidebarOpen]=useState(false)
  const toggleSidebar=()=>{
    setisSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className='flex h-screen bg-neutral-50 text-neutral-900'>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header toggleSidebar={toggleSidebar}/>
        <main className='flex-1 overflow-x-hidden overflow-y-auto p-6'>
        {children}
        </main>

      </div>
    </div>
  )
}

export default AppLayout
