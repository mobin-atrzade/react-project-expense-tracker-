import React from 'react'
import './App.css'
import ExpenseApp from './components/ExpenseApp'

const App = () => {
  return (
    <div className="App" >
      <header>
        <h2>Expense tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  )
}
export default App;