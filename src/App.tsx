import './App.css'
import toast, { Toaster } from 'react-hot-toast';

const tabs:string[] = ["Tab1", "Tab2", "Tab3", "Tab4"]

function App() {

  const Onclick = (tabName:string)=>{
    console.log('Clicked')
    toast.success(tabName);
  }

  return (
    <div className="relative w-full px-8 fixed top-0 z-100 flex items-center" style={{backgroundColor:"#e6f0f0", height:"3.8rem"}}>
      <div className="flex flex-row gap-4 ">
        {
          tabs.map((tab)=>(
            <div className="w-20"><button 
                style={{color:"black"}} 
                className='hover:color-red-500' 
                onClick={()=>{
                  console.log('Clicked')
                  toast.success(tab)
                }}
              >{tab}
              </button>
            </div>
          ))
        }
      </div>
      <Toaster position="bottom-center" gutter={56} />
    </div>
  )
}

export default App
