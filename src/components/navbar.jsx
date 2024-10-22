
const navbar = () => {
  return (
    <div className="w-full h-[50px] shadow-lg flex justify-between  items-center px-10">
      <div>
            <a href="" className="text-2xl text-orange-600 font-semibold">LOGO</a>
      </div>

      <div>
      <ul className="flex gap-[25px]">
        <li><a href="#" className="block  px-[0.6rem] bg-blue-600 text-white hover:bg-orange-600">Home</a></li>

        <li><a href="#"  className="block  px-[0.6rem] bg-blue-600 text-white hover:bg-orange-600" >About</a></li>

        <li><a href="#" className="block  px-[0.6rem] bg-blue-600 text-white hover:bg-orange-600" >Alumini</a></li>
        
        <li><a href="#"  className="block  px-[0.6rem] bg-blue-600 text-white hover:bg-orange-600">Contact</a></li>
      </ul>


      </div>
    </div>
  )
}

export default navbar
