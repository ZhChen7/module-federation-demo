import React from 'react'

const App = () => {
  const handleclick = ()=>{
    alert('按钮2的弹窗')
  }
  return (
    <div className="app2">
      <button onClick={handleclick}>这是应用2的按钮</button>
    </div>
  )
}

export default App
