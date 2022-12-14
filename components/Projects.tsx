import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
    </div>
  )
}

export default Projects