import React, { useState } from 'react'
import { navLinks } from "./NavDB";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link
} from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
            <div className="space-y-2 w-full ">
                {navLinks.map((link, index) => (

                    <div key={index} className='flex cursor-pointer group hover:border-gray-900 border-l-4'>

                        <NavLink
                            to={link.url}
                            className={({ isActive }) => (isActive ? 'bg-gray-200 w-full' : '')}
                        >
                            <div className='flex m-1 items-center justify-start gap-5 px-5 cursor-pointer p-2'>
                                <span>{link.icon}</span>
                                <h1 className='hidden text-gray-600 hover:text-black lg:flex '>{link.title}</h1>
                            </div>


                        </NavLink>



                    </div>

                ))}

            </div>

        </nav>
    );
}


// function NavItem({ link }) {
//     const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
//     return (
//         <div
//             onClick={() => setActiveNav(link.id)}
//             key={link.id}
//             className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
//            group hover:border-gray-900 border-l-4 border-transparent ${activeNav === link.id && "border-gray-900 "
//                 } `}
//         >
//             <span> {link.icon}</span>
//             <h1
//                 className={`text-gray-600 group-hover:text-black xl:flex hidden ${activeNav === link.id && "text-black "
//                     }} `}
//             >
//                 {link.title}
//             </h1>
//         </div>
//     );

//}



export default SideNav