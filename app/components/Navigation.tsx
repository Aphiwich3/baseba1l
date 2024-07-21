'use client';

import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Navigation() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">BAseBA1l</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            href="/RESUME APHIWICH (1).pdf" 
            download="RESUME APHIWICH (1).pdf" 
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer no-underline inline-block hover:from-blue-500 hover:to-purple-600 transition duration-300 shadow-sm hover:shadow"
            >
                 Resume
            </a>
           
         
        </li>
       
      </ul>
    </nav>
  );
}