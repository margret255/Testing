import Navbar from "../components/navbar"
const home = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex h-[50vh] w-full justify-between items-center p-[20px] ">
        <div className="basis-[55%]">
            <p>
                Welcome to our beauty products<br></br>
                We care about our customers
            </p>
<button>Explore with us</button>
        </div  >
        <div className="basis-[40%] flex justify-center items-center bg-slate-200 p-[15px]" style={{
               border:"4px solid blue"
        }
         
        }>
        <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="max-h-[300px] max-w-[330px] rounded-full" />
        </div>
       
      </div>
    </div>
    
  )
}

export default home
