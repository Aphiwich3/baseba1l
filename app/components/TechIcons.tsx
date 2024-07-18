// components/TechIcons.tsx
"use client";
import Image from "next/image";

const TechIcons = () => {
  const skillCategories = [
    {
      title: "skills",
      skills: [
        {
            name: "Postman",
            icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            url: "https://www.postman.com/",
          },
          {
            name: "Echo (Golang)",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            url: "https://echo.labstack.com/",
          },
          
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
          url: "https://www.typescriptlang.org/",
        },
        {
          name: "HTML5",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          name: "Next.js",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
          url: "https://nextjs.org/docs",
        },
        {
          name: "TailwindCSS",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
          url: "https://tailwindcss.com/",
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
          name: "GNU Bash",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gnubash.svg",
          url: "https://www.gnu.org/software/bash/",
        },
        {
          name: "Docker",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
          url: "https://www.docker.com/",
        },
        {
          name: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
          url: "https://www.postgresql.org/",
        },
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
          url: "https://www.mongodb.com/",
        },
        {
          name: "Google Cloud",
          icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
          url: "https://cloud.google.com",
        },
        {
            name: "Amazon Web Services",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
            url: "https://aws.amazon.com",
          },
              {
                name: "ArgoCD",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg",
                url: "https://argoproj.github.io/cd/",
              },
              {
                name: "SonarQube",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
                url: "https://www.sonarqube.org/",
              },
              {
                name: "Kubernetes",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                url: "https://kubernetes.io/",
              },
                {
                name: "Ubuntu",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
                url: "https://ubuntu.com/",
              },
              {
                name: "Windows",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
                url: "https://www.microsoft.com/windows/",
              },
              {
                name: "macOS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                url: "https://www.apple.com/macos/",
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