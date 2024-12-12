// Author: @PEEACHYBEE Freskkie Encarnacion
//         @yukiroow Harry Dominguez
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="flex items-center px-8 py-8 justify-center -ml-20 space-x-20 w-full fixed top-0 z-40 bg-base-100">
                {["Experiences", "Events", "Opportunities"].map((item) => (
                    <NavLink
                        key={item}
                        className={({ isActive }) =>
                            isActive
                                ? "text-lg font-semibold cursor-pointer transition-colors duration-300 text-[#022543]"
                                : "text-lg font-semibold cursor-pointer transition-colors duration-300 text-[#7C7575]"
                        }
                        to={"/app/home/" + item.toLowerCase()}
                    >
                        {item}
                    </NavLink>
                ))}
            </div>
        </>
    );
};

export default NavBar;
