import { Link } from "react-router-dom";
const Notloggedin = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white mx-4 flex flex-col lg:scale-75">
            <div className="scale-50">
                <img src="images/notlogged.svg"  />
            </div>
            <div className="flex flex-row justify-center gap-x-6 mb-8">
            <Link to="signin">
      <button className=" border w-[200px] h-14 rounded-md border-[#005C30]  text-[#005C30]">Sign in</button>
      </Link>
                
        <button className="bg-[#005C30] text-white w-[200px] h-14 rounded-md">Continue as Guest</button>

            </div>

        </div>
        
        </div>
  )
}

export default Notloggedin