import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import classes from '../Styles/App.module.css'

function App() {

  return (
    <div className={classes.principal}>
      <div className={classes.secundario}>
        <h1>AddTask</h1>
      </div>
      <div className={classes.secundario}>
        <h1>TaskList</h1>
      </div>
    </div>
  )
}

export default App
