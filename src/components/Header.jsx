import React from "react";
import { Link } from "react-router";

function Header({avatar='src/assets/Recruiter.png'}) {
return (
    <nav className="w-full fixed top-0 left-0 z-2 bg-gradient-to-b from-black to-transparent to-40%">
        <div className="m-4 flex items-center gap-4 font-normal text-xl justify-between">
            <div className="flex justify-start items-center gap-4">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://fontmeme.com/permalink/250612/ff86bbbd1c9d55ff9b322e3672f5f5f4.png"
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </Link>
                <div className="text-white list-none flex flex-row gap-4">
                    <Link to="/"><div> Home </div></Link>
                    <Link to="/professional"><div> Professional </div></Link>
                    <Link to="/skills"><div> Skills </div></Link>
                    <Link to="/projects"><div> Projects</div></Link>
                    <Link to="/hire"><div> Hire Me</div></Link>
            </div>
            </div>
            
            <div>
                <Link to={"/"}> <img src={avatar} alt="Avatar" className="rounded-full h-10 w-full" /> </Link>
            </div>
        </div>
    </nav>
);
}

export default Header;
