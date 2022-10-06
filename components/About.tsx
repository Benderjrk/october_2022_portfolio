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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-emerald-300">little</span>{" "}
          about me
        </h4>
        <p className="text-base">
            Hi my name is Justin Bender I am currently a software engineer with a blockchain startup. After getting out of a career in professional skydiving with over 5000 jumps. I enjoy the power that technology brings to the world. One of my favorite parts is the ability to automate arbitrary tasks. We can build something and use it for years. Automation can help us spend time doing more important things.I enjoy strict coding design with self documenting code. If we can build it reusable, we will. I bring a unique experience from software development, skydiving, 3d printing, CAD modeling, video game creation, photography, video editing, graphic design, social media management and more. My favorite tech is: Next.js, TailwindCSS, TypeScript, Rust, Bash and Gun.js. I know I have lot&apos;s of room to improve but it&apos;s on the list.
        </p>
      </div>
    </motion.div>
  );
};

export default About;