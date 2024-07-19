// components/TechIcons.tsx
"use client";
import Image from "next/image";

const TechIcons = () => {
  const skillCategories = [
    {
      title: "skills",
      skills: [
        
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
          url: "https://www.typescriptlang.org/",
        },
        {
          name: "HTML5,CSS,JavaScript",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          name: "Next.js",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
          url: "https://nextjs.org/docs",
        },
        
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
          url: "https://git-scm.com/",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg",
          url: "https://code.visualstudio.com/",
        },
        {
          name: "Unity",
          icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.svg",
          url: "https://unity.com/",
        },
      
              {
                name: "Windows",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
                url: "https://www.microsoft.com/windows/",
              },
              
              
      ],
      
    },
  ];
  

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {skillCategories.map((category) => (
        <div key={category.title} className="mb-8 text-center w-full">
          <h3 className="text-2xl  mb-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill) => (
              <a 
                key={skill.name}
                href={skill.url} 
                target="_blank" 
                rel="noreferrer" 
                className="m-2 transition-transform hover:scale-110"
              >
                <Image
                  src={skill.icon}
                  width={40}
                  height={40}
                  alt={skill.name}
                  title={skill.name}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;