import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import justinsPicture from '../public/bender.png'
import Link from 'next/link';


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, The Name\'s Justin Bender', 
            'Technologist',
            'Let\'s give it a go',
            'JavaScript',
            'TypeScript',
            'Next.JS',
            'Bash',
            'Docker',
            'HTML5',
            'TailwindCSS',
            'Node.JS',
            'Rust',
            'WASM (WebAssembly)',
            'Cardano G.O.A.T.',
            'Life Long Learner',
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <div className='relative rounded-full h-32 w-32 mx-auto'>
            <Image
                src={justinsPicture.src}
                alt="Picture of Justin Bender"
                layout="fill"
            />
        </div>
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
            <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#47FF09' />
            </h1>

            <div className='pt-5'>
                <Link href={'#about'}>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href={'#experience'}>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href={'#skills'}>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href={'#projects'}>
                    <button className='heroButton'>Projects</button>
                </Link>
                
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Hero