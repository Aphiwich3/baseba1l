"use client";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    image: "/certifications1.png",
    tag: ["certifications"],
    gitUrl: "https://credsverse.com/credentials/bc13c3af-3911-4c88-ae4c-46d1781c7704",
    previewUrl: "https://credsverse.com/credentials/bc13c3af-3911-4c88-ae4c-46d1781c7704",
  },
  {
    id: 2,
    image: "/certifications2.png",
    tag: ["certifications"],
    gitUrl: "https://coursera.org/share/bb2653a36d94ca0162befc3836ab7411",
    previewUrl: "https://coursera.org/share/bb2653a36d94ca0162befc3836ab7411",
  },
  {
    id: 3,
    image: "/certifications3.png",
    tag: ["certifications"],
    gitUrl: "https://coursera.org/share/7f14f5032071103ea674c4ee3e96aa7d",
    previewUrl: "https://coursera.org/share/7f14f5032071103ea674c4ee3e96aa7d",
  },
  {
    id: 4,
    image: "/certifications4.png",
    tag: ["certifications"],
    gitUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8B5AIWPF0B.png",
    previewUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8B5AIWPF0B.png",
  },
  {
    id: 5,
    image: "/certifications5.png",
    tag: ["certifications"],
    gitUrl: "https://coursera.org/share/df224cd7f2e3cccb8587543567fd698c",
    previewUrl: "https://coursera.org/share/df224cd7f2e3cccb8587543567fd698c",
  },
  {
    id: 6,
    image: "/certifications6.png",
    tag: ["certifications"],
    gitUrl: "https://coursera.org/share/353f5c72bd93c471492ce4f6020e28de",
    previewUrl: "https://coursera.org/share/353f5c72bd93c471492ce4f6020e28de",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="certifications">
      <h2 className="text-center text-4xl mt-4 mb-8 md:mb-12 dark:text-gray-200">
        My Certifications
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;