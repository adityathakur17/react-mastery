import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {
  
  return (
    <>
 
    <h1 className="text-3xl font-bold underline">
      Redux Toolkit Todo Project
    </h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
