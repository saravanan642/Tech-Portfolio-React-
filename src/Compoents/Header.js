import img1 from "../Assests/saravanan.jpg";
import { IoIosKeypad } from "react-icons/io";
const Header = () => {
    return (
        <div>
            <div className=" flex  justify-around mt-9">
                <img
                    src={img1}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover ml-36 mt-2"
                />
                <div className=" m-10 flex gap-14">
                    <div className=" text-white font-medium flex gap-24 font-serif mr-30 pr-20 ">
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>PROJECTS</a>
                        <a>CONTACT</a>
                        <a>EXPOSURE</a>
                    </div>

                    <div  className=" flex text-white  gap-3 ">
                        <div> <IoIosKeypad className=" object-cover w-7 h-7  pb-1" /></div>
                        <a className=" text-white font-medium flex gap-8  font-serif">SKILLS</a>



                    </div>
                </div>


            </div>


        </div>
    )
}

export default Header
