import img1 from "../Assests/letter-s.png";
import { IoIosKeypad } from "react-icons/io";
import emailjs from '@emailjs/browser';


const Header = () => {

    const handleClick = () =>
    {
        const data = {
            otp:"6767",
            name:"ufuege",
            email:"abivengadajalam7708@gmail.com"
        }

        emailjs
      .send('service_l7s2ah4', 'template_hza81m8', data, {
        publicKey: 'zRv3_fcYGYMfIRxRw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Send successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    return (
        <div>
            <div className="flex justify-around mt-0  border border-solid border-x-0 border-y-white/35">

                {/* LEFT : LOGO */}
                <div className=" flex  gap-3 mt-8 ml-36">
                    <img
                        src={img1}
                        alt="Profile"
                        className="w-[50px] h-[50px] rounded-3xl object-cover border border-white hover:scale-110 transition duration-300 ease-in-out"
                    />
                    <p className="text-white text-2xl font-medium font-serif mt-3  hover:text-cyan-400">
                        aravanan
                    </p>
                </div>

                {/* CENTER + RIGHT */}
                <div className="m-8 flex gap-14 mr-40">

                    {/* NAVBAR */}
                    <div className="text-white font-medium flex gap-16 font-serif mr-30 pr-20 border border-solid border-white rounded-3xl p-3 pt-5 justify-evenly pl-16">

                        <a className="relative cursor-pointer hover:text-cyan-400 transform hover:scale-105 transition duration-300 ease-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                            HOME
                        </a>

                        <a className="relative cursor-pointer hover:text-cyan-400 transform hover:scale-105 transition duration-300 ease-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                            ABOUT
                        </a>

                        <a className="relative cursor-pointer hover:text-cyan-400 transform hover:scale-105 transition duration-300 ease-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                            PROJECTS
                        </a>

                        <a className="relative cursor-pointer hover:text-cyan-400 transform hover:scale-105 transition duration-300 ease-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                            SKILLS
                        </a>
                    </div>

                    {/* EXPOSURE */}
                    <div className="flex text-white gap-3 mt-0 ml-11 border border-solid border-white rounded-3xl p-3 pt-5">
                        <div 
                        onClick={() => handleClick()}

                        className=" relative flex   hover:text-cyan-400 transform hover:scale-110  transition duration-300 ease-out after:content-[''] after:absolute after:left-0 after:bottom-0  after:w-0  after:h-[2px]  after:bg-cyan-400  after:transition-all  after:duration-300 hover:after:w-[105px]">
                            <span >
                                <IoIosKeypad className="w-7 h-7 pb-1" />
                            </span>


                            <a 
                            
                            className="relative cursor-pointer hover:text-cyan-400 transform hover:scale-105 transition duration-300 ease-out ">
                                EXPOSURE
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
