"use client";
import { FaRegEye } from "react-icons/fa";
import { HiCodeBracketSquare } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image
          src={imgUrl}
          alt="Certification"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiCodeBracketSquare className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaRegEye  className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;