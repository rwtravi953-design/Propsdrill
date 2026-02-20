import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'

function App() {
const array=["java","dsa","ect"]

  return (
    <>
      <div className="edit">
      <Props fr={array[0]}
      second={array[1]}
      third={array[2]}
      />
        </div>
    </>
  )
}

export default App
