"use client";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    image: "/certifications1.jpg",
    tag: ["certifications"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    image: "/NCS_page-0001.jpg",
    tag: ["certifications"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    image: "/Certificate for APHIWICH PRANGTHO  for _Code Their Dream Certificat...__page-0001.jpg",
    tag: ["certifications"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    image: "/Academic results 64.jpg",
    tag: ["Academic results"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    image: "/Academic results 65-.jpg",
    tag: ["Academic results"],
    gitUrl: "",
    previewUrl: "",
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