import img1 from "../Assests/saravanan.jpg";


const Header = () => {
    return (
        <div>
            <div> <img
                src={img1}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
            />
            <div className=" text-white font-medium flex gap-8 font-serif ">
                <a>HOME</a>
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>CONTACT</a>
                <a>EXPOSURE</a>
            </div>
            
            <div></div>
            
            </div>


        </div>
    )
}

export default Header
