import img1 from "../Assests/saravanan.jpg";

const Header = () => {
    return (
        <div>
            <div className=" flex  justify-around mt-9">
                <img
                    src={img1}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover"
                />
                <div className=" m-10 flex gap-14">
                    <div className=" text-white font-medium flex gap-14 font-serif ">
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>PROJECTS</a>
                        <a>CONTACT</a>
                        <a>EXPOSURE</a>
                    </div>

                    <div >
                        <a className=" text-white font-medium flex gap-8  ml-11 font-serif">SKILLS</a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Header
