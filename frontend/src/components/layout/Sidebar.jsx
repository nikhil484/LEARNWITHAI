import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { LayoutDashboard,FileText,User,LogOut,BrainCircuit,BookOpen,X, icons } from 'lucide-react'

const Sidebar = ({isSidebarOpen,toggleSidebar}) => {

  const { logout}=useAuth()
  const navigate= useNavigate()
  const handleLogout=()=>{
    logout()
    navigate('/login')
  }
 
  const navLinks=[
    {to:'/dashboard',icon:LayoutDashboard,text:'Dashboard'},
    {to:'/documents',icon:FileText,text:'Documents'},
    {to:'/flashcards',icon:BookOpen,text:'Flashcards'},
    {to:'/profile',icon:User,text:'Profile'}
  ]

  return <>
   <div className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${
    isSidebarOpen ? 'opacity-100':'opacity-0 pointer-events-none '}`}
    
    onClick={toggleSidebar}
    aria-hidden='true'>
   </div>

   <aside className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-lg border-r border-slate-200/60 z-50 md:relative md:w-64 md:shrink-0 md:flex md:flex-col md:translate-x-0 transition-transform  duration-300 ease-in-out ${
    isSidebarOpen ? 'translate-x-0':'-translate-x-full'
   }`}>

   </aside>
  </>
}

export default Sidebar
