
import './App.css'

function App() {
  

  return (

    <>
    {/* nav design  */}
    <div className=' p-3 w-full    flex flex-wrap items-center justify-between font-serif text-slate-500 font-bold '>
     
       
      <div className='flex gap-8   '>
    <img  className='mx-5' src="./logo.svg" alt="" />
        <span className='flex'>Features
          <span className='mt-2.5 mx-1'><img src="./icon-arrow-down.svg" alt="" /></span>
           </span>
        <span className='flex'>Company
        <span className='mt-2.5 mx-1'><img src="./icon-arrow-down.svg" alt="" /></span>

        </span>
        <span>Careers</span>
        <span>About</span>
      </div>
      <div className=' flex items-center gap-12 mx-5'>
        <span className=''>Login</span>
        <button className='border-gray-500 border rounded-xl p-1     '>Register</button>
      </div>
      
    </div>

    {/* body  */}
    <div className= 'w-full  h-96  flex p-8 '>
      
      <div className='w-1/2 mx-12 mt-12'>
        <h1 className='font-black text-7xl font-sans  '>Make</h1>
        <h1 className='font-black text-7xl font-sans  '>remote work</h1>

        <p className='text-left text-slate-500 w-2/3 mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae temporibus, aspernatur harum, provident sunt.</p>
        <button className='bg-black text-white  mt-12 p-2 font-black font-mono text-lg rounded-lg '>Learn more</button>
        <div className='mt-12 flex gap-7'>
        <span><img src="./client-databiz.svg" alt="" /></span>
        <span><img src="./client-audiophile.svg" alt="" /></span>
        <span><img src="./client-meet.svg" alt="" /></span>
        <span><img src="./client-maker.svg" alt="" /></span>
      </div>

      </div>
      <div className='w-1/2 '>
        <img className=' w-3/5 mx-12 ' src="./image-hero-desktop.png" alt="" />

      </div>
      
     
    </div>
    
   


     
    </>
  )
}

export default App
