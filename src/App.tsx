import './App.css'

// const tabs:string[] = ["Tab1", "Tab2", "Tab3", "Tab4"]

function App() {

  return (
    <div style={{height:'3.8rem',width:"100%",backgroundColor:"#e6f0f0",position:"absolute",top:0,zIndex:100 }}>
      <div className='flex flex-row'></div>
        <div className='w-[4rem]' >Tab1</div>
        <div className='w-[4rem]' >Tab2</div>
        <div className='w-[4rem]' >Tab3</div>
      <div>
        Tab1
      </div>
    </div>
  )
}

export default App
