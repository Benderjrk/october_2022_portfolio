import React from 'react'
import Image from 'next/image';
import goat from '../public/CardanoGoatSmall.png';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={goat.src}
                alt="Cardano Goat"
            />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Developer</h4>
            <p className='font-bold text-2xl mt-1'>Cardano Goat</p>
            <div>
                {/* Tech used */}
            </div>
            <p>started work ... - Ended ...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard