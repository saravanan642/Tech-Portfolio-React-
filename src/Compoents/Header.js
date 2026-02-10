import img1 from "../Assests/saravanan.jpg";
import { IoIosKeypad } from "react-icons/io";
const Header = () => {
    return (
        <div>
            <div className="  md:flex  justify-around mt-9 md:">
                <img
                    src={img1}
                    alt="Profile"
                    className=" md:w-[100px] h-[100px] rounded-full object-cover ml-36 mt-2 border border-solid border-white border-[1px]  hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="md: m-8 flex gap-14 mr-40 ">
                    <div className=" text-white  font-medium flex gap-24 font-serif mr-30 pr-20  border border-solid border-white  rounded-2xl p-3  pt-5 justify-evenly pl-16   ">
                        <a className=" cursor-pointer  hover:text-cyan-400 transform hover:scale-105 transition  duration-300 ease-out" >HOME</a>
                        <a className="  cursor-pointer  hover:text-cyan-400 transform hover:scale-105 transition  duration-300 ease-out">ABOUT</a>
                        <a className=" cursor-pointer  hover:text-cyan-400 transform hover:scale-105 transition  duration-300 ease-out ">PROJECTS</a>
                        <a className=" cursor-pointer  hover:text-cyan-400 transform hover:scale-105 transition  duration-300 ease-out">EXPOSURE</a>
                    </div>

                    <div className=" md: flex text-white  gap-3  mt-0 ml-11 border border-solid border-white rounded-2xl  p-3 pt-5 ">
                        <div> <IoIosKeypad className=" object-cover w-7 h-7  pb-1  hover:text-cyan-400 transform hover:scale-110 transition  duration-300 ease-out"  /></div>
                        <a className=" text-white font-medium flex gap-8  font-serif cursor-pointer  hover:text-cyan-400 transform hover:scale-105 transition  duration-300 ease-out">SKILLS</a>



                    </div>
                </div>


            </div>


        </div>
    )
}

export default Header
