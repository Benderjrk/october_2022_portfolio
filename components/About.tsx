import React from "react";
import surfer from "../public/surfer_1774.gif";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={surfer.src}
        className="-mb-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-2xl md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#47FF09] decoration-wavy">little</span>{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#8B00F7]/40 before:rounded-xl hover:before:skew-y-3 hover:before:bg-[#47FF09]/40 relative inline-block">
            <span className="relative">about me</span>
        </span>
        </h4>
        <p className="text-sm text-justify">
            Hi my name is Justin Bender I am currently a software engineer with a blockchain startup. After getting out of a career in professional skydiving with over 5000 jumps. I enjoy the power that technology brings to the world. One of my favorite parts is the ability to automate arbitrary tasks. We can build something and use it for years. Automation can help us spend time doing more important things. I bring a unique experience from software development, skydiving, 3d printing, CAD modeling, video game creation, photography, video editing, graphic design, social media management and more.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
