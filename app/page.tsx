'use client';

import { useCallback, useEffect, useState } from "react";
import ProjectsSection from "./components/ProjectsSection";
import TechIcons from "./components/TechIcons";
import PersonalInfo from "./components/PersonalInfo";
import Navigation from "./components/Navigation";
import { useDarkMode } from "./contexts/DarkModeContext"; 

export default function Home() {
  const { darkMode } = useDarkMode(); 
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(' Aphiwich or you can call me Ball,Baseball.');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ " student"," Aphiwich or you can call me Ball,Baseball." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => { clearInterval(ticker) };
  }, [text, delta]); 

 const tick = useCallback(() => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
}, [loopNum, isDeleting, text, toRotate, period]);

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);

  return () => { clearInterval(ticker) };
}, [tick, delta]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
       <Navigation />
        <PersonalInfo text={text} />
        <TechIcons />
        <ProjectsSection />    
      </main>
    </div>
  );
}