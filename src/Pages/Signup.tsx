import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex w-full justify-center items-center border" >
    <div className="w-full md:w-6/12 mx-8 my-4">
    <div className="lg:ml-16 md:ml-12 ml-4 md:mt-12"> 
      <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-8 md:h-8 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3   12h18" />
        </svg>
        </Link>

      </div>
        <h1 className="text-3xl text-center my-8">E-Services Register</h1>
        <div className="flex flex-col h-auto items-center gap-y-8">
            <input type="text" placeholder="Email Address" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="text" placeholder="First Name" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="text" placeholder="Middle Name" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="text" placeholder="Last Name" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="date" placeholder="Date of Birth" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="text" placeholder="State of Origin" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="text" placeholder="LGA" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <input type="password" placeholder="Input Password" className="w-[340px] p-4 outline outline-[#005C30] outline-rounded-md rounded-md h-14" />
            <button className="bg-[#005C30] w-[200px] text-white rounded-md h-14">Register Account</button>
            <p className="text-sm">Have an Account? <Link to="/signin"><span className="text-[#005C30]">Login</span></Link></p>
        </div>
    </div>

</div>
  )
}

export default Signup