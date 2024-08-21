// import React, { useState, useEffect } from 'react'
// import { FaToggleOff,FaToggleOn } from "react-icons/fa6";

// const DarkMode = () => {

//     const [theme, setTheme] = useState(
//         localStorage.getItem("theme") ? localStorage.getItem
//         ("theme") : 'light'
//     );
//     const element = document.documentElement; //html element
//       useEffect(() =>{
//         if (theme==='dark') {
//             element.classList.add('dark')
//             localStorage.setItem('theme', 'dark')
//         } else {
//             element.classList.remove('light')
//             localStorage.setItem('theme', 'light')
//         }
//     }, [theme])

//   return (
//     <div className='relative'>
//         {theme === 'light' ? (
//           <FaToggleOn 
//           onClick={() => setTheme(theme==='light' ? 'dark' : 'light')}
//         className='text-2xl cursor-pointer opacity-65
//          drop-shadow-[1px_1px_rbga(0,0,0,0.1)] trasition-all
//          duration-300 absolute right-0 z-10 '
//         />
//         ) : (
//             <FaToggleOff
//             onClick={() => setTheme(theme==='light' ? 'dark' : 'light')}
//             className='text-2xl cursor-pointer opacity-65
//             drop-shadow-[1px_1px_rbga(0,0,0,0.1)] trasition-all
//             duration-300 '
//            />
//         )}
        
     
//     </div>
//   )
// }

// export default DarkMode



import React, { useState, useEffect } from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? 
    localStorage.getItem('theme') : 'light'
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className='relative'>
      {theme === 'light' ? (
        <FaToggleOn
          onClick={() => setTheme('dark')}
          className='text-2xl cursor-pointer top-[-0.7rem]
           opacity-65 drop-shadow-[1px_1px_rgba(0,0,0,0.1)] 
           transition-all duration-300 absolute right-0 z-10'
        />
      ) : (
        <FaToggleOff
          onClick={() => setTheme('light')}
          className='text-2xl cursor-pointer opacity-65 
          drop-shadow-[1px_1px_rgba(0,0,0,0.1)]
           transition-all duration-300'
        />
      )}
    </div>
  );
};

export default DarkMode;
