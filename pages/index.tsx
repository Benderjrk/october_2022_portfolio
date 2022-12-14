import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div 
      initial={{
        backgroundColor: '#1D1F1F'
      }}
      animate={{
        backgroundColor: ['#133702', '#1D1F1F']
      }}
      transition={{
        duration: 2.5,
      }}
      className=" text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Justin&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      
      {/* Contact Me */}

    </motion.div>
  )
}

export default Home
