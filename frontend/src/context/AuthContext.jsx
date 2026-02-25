import React,{createContext,useContext,useState,useEffect} from 'react'
//createContext() creates a React Context object that allows data to be 
// shared globally across components without passing props manually through 
// every level of the component tree.
// This line is NOT storing user data yet.
// It is only creating a global communication channel.
// createContext() is a function from React that creates a Context object.
// Think of Context as:
// a shared data pipe that any component in the app can plug into.

const AuthContext=createContext()
//What is useContext?
//useContext is a React Hook that lets a component access data stored in a Context 
// (like AuthContext) without using props.
export const useAuth=()=>{
    const context= useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider=({children})=>{
 const[user,setUser]=useState(null)
 const[loading,setLoading]=useState(true)
 const[isAuthenticated,setIsAuthenticated]=useState(false)


 useEffect(()=>{
    checkAuthStatus()
 },[])

 const checkAuthStatus=async()=>{
    try {
        const token= localStorage.getItem('token')
        const userStr= localStorage.getItem('user')

        if(token && userStr){
            const userData= JSON.parse(userStr)
            setUser(userData)
            setIsAuthenticated(true)
        }
    } catch (error) {
        console.error('Auth check failed :',error)
        logout()
    }finally{
        setLoading(false)
    }
 }

 const login=(userData,token)=>{
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(userData))
 }

 const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setIsAuthenticated(false)
    window.location.href='/'
 }

 const updateUser=(updateUserData)=>{
    const newUserData= {...user,...updateUserData}
    localStorage.setItem('user',JSON.stringify(newUserData))
    setUser(newUserData)
 }
 const value={
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    updateUser,
    checkAuthStatus
 }
 
return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 