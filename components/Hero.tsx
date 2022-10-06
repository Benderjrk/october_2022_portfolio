import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, The Name\'s Justin Bender', 
            'Life Long Learner',
            'Technologist',
            'Lets give it a go',
            'JavaScript',
            'TypeScript',
            'Next.JS',
            'Cardano G.O.A.T.'
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div>
        
    </div>
  )
}

export default Hero