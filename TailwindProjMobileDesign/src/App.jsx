
import './App.css'

function App() {
  
  return (
    <>
     <div className='w-full h-screen bg-black flex justify-center  '>
        <div className=' bg-white h-screen w-96 p-4 '>
          <div className='flex  justify-between'>
           <img src="./logo.svg" alt="" />
           <img src="icon-menu.svg" alt="" />
          </div>
          <img src="./image-hero-mobile.png" alt="" />
          <h1 className=' mt-4 text-center font-black text-3xl font-sans  '>Make remote work</h1>
          <p className='text-center text-slate-500  mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae temporibus, aspernatur harum, provident sunt.</p>
        <div className='text-center mt-2'>
        <button className='bg-black text-white p-2 font-black font-mono text-lg rounded-lg '>Learn more</button>

      </div>        
<div className='mt-12 flex gap-7'>
        <span><img src="./client-databiz.svg" alt="" /></span>
        <span><img src="./client-audiophile.svg" alt="" /></span>
        <span><img src="./client-meet.svg" alt="" /></span>
        <span><img src="./client-maker.svg" alt="" /></span>
      </div>


        </div>
      

     </div>
    </>
  )
}

export default App
