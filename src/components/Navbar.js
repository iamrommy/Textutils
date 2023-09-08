//This is a react component i.e Navbar
import React , {useState} from 'react' ;
// import logo from './logo.svg';
import PropTypes from 'prop-types'; //Before using proptypes, first we have to import it like this, Props are read only
import {Link} from "react-router-dom"; //Link will help to give a link anywhere without reloading page

export default function Navbar(props) {  //props are the properties which we can set every time we use a component if we want a change in component

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const [colorPallete, setColorPallete] = useState(["gray-100", "gray-200"]);

    const ToggleColorMode = (color)=>{
        // removeColorClass();
        document.body.removeAttribute('class');
        if(color === "light"){
            setColorPallete(["gray-100", "gray-200"]);
            document.body.setAttribute('class', `bg-gray-200`);
        }
        else if(color === "dark"){
            setColorPallete(["gray-500", "gray-600"]);
            document.body.setAttribute('class', `bg-gray-500`);
        }
        else{
            setColorPallete([color + "-500", color + "-600"]);
            document.body.setAttribute('class', `bg-${color}-500`);
        }
    }

return (
    <nav className={props.mode === "light" ? "bg-blue-300 text-black" : "bg-gray-800 text-[#e5e7eb]"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex">
                        <h4 className="text-xl sm:text-2xl text-blue-600 mt-[3px] mr-[4vw]">{props.title}</h4>
                        {/* <img className="h-10 w-10" src={logo} alt="Logo"/> */}
                    </div>
                    <div className='flex'>
                    <div className={(props.mode === "light" ? "text-black" : "text-[#e5e7eb]") + "flex items-baseline"}> 
                        <Link to="/" className="hover:bg-gray-700 py-2 px-[2vw] hover:text-white rounded-md text-sm font-medium">Home</Link>
                        <Link to="/about" className="hover:bg-gray-700 px-[2vw] hover:text-white py-2 rounded-md text-sm font-medium">{props.AboutText}</Link>
                        {/* <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link> */}
                        {/* <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md t=ext-sm font-medium">Contact</Link> */}
                        {/* <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{props.AboutText}</a> */}
                        
                    </div>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <button  onClick={toggleDropdown} type="button" className={`rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-${colorPallete[0]} text-sm font-medium hover:bg-${colorPallete[1]} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    </button>

                {isDropdownOpen && ( <div className="absolute top-14 -translate-x-[11px] w-11 rounded-md shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="dropdownButton" >
                    <div className="block px-4 py-4 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("light")}> </div>
                    <div className="block px-4 py-4 text-sm bg-red-500 text-gray-700 hover:bg-red-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("red")}> </div>
                    <div className="block px-4 py-4 text-sm bg-blue-500 text-gray-700 hover:bg-blue-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("blue")}> </div>
                    <div className="block px-4 py-4 text-sm bg-green-500 text-gray-700 hover:bg-green-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("green")}> </div>
                    <div className="block px-4 py-4 text-sm bg-yellow-500 text-gray-700 hover:bg-yellow-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("yellow")}> </div>
                    <div className="block px-4 py-4 text-sm bg-pink-500 text-gray-700 hover:bg-pink-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("pink")}> </div>
                    <div className="block px-4 py-4 text-sm bg-gray-500 text-gray-700 hover:bg-gray-600 border-2 hover:border-black" role="menuitem"  onClick={()=> ToggleColorMode("dark")}> </div>
                    </div>
                )}
                    <label className="relative inline-flex items-center cursor-pointer" onClick={()=> ToggleColorMode(props.mode==="light" ? "dark" : "light")}>
                        <input type="checkbox" value="" className="sr-only peer"  onClick={props.ToggleMode}/>
                        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className={(props.mode === "light" ? "text-black " : "text-[#e5e7eb] ") + "hidden md:block ml-3 text-sm font-medium dark:text-gray-300"}>Dark Mode</span>
                    </label>
                </div>
            </div>
        </div>
    </nav>
  );
}

//Proptypes are used to set a particular datatype for every prop so that in future we may not end up sending a wrong prop input in a prop
Navbar.propTypes = {title: PropTypes.string,
                    AboutText: PropTypes.string.isRequired,
                   };

//If props are not set while using a component then these default props will be used
Navbar.defaultProps = {title: "Default Title",
                       AboutText: "About",
                      };                