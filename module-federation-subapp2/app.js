import React from 'react'

const App = ({text}) => {
  const handleclick = ()=>{
    alert(text)
  }
  return (
    <div className="app2">
      <button onClick={handleclick}>这是应用2的按钮</button>
    </div>
  )
}

export default App
