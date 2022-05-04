import React from 'react'
import {motion} from "framer-motion"
import {images} from '../constants'
import {AppWrap} from '../Wrapper'

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity:[0,1],
    transition:{
      duration: 1, 
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row justify-center items-center relative 
      bg-header-img bg-cover bg-repeat bg-center pt-24 px-2 sm:px-8 ">
      <motion.div
      whileInView={{x: [-100,0], opacity:[0,1]}}
      transition={{duration:0.5}}
      className='flex-initial w-full md:w-1/4  flex flex-col justify-start items-start h-full'
      >
        <div className='flex flex-col justify-start items-start'>
          <div className='badge flex justify-center items-center'>
            <span className='text-3xl md:text-5xl'>👋</span>
            <div className='ml-10'>
              <p>Hello, I am</p>
              <h1 className='text-2xl md:text-4xl'>Ghislain</h1>
            </div>
          </div>
          <div className='flex justify-center items-center badge flex-col mt-12'>
            <p className='w-full uppercase text-right'>Web Developer</p>
            <p className='w-full uppercase text-right'>Mobile Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren:0.5}}
        className='flex-auto h-full flex flex-end items-end relative w-full md:w-1/2'
      >
        <img src={images.profile} height="100%" alt="profile" className='w-full object-contain z-[1]'/>
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:1, ease: 'easeInOut',}}
          src={images.circle}
          alt="profile_circle"
          className='absolute left-0 right-0 bottom-0 w-full h-[90%]'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex-initial flex w-full md:w-1/4 flex-row flex-wrap md:flex-col justify-evenly items-start h-full md:ml-4 techs'
      >
        {[images.react, images.node, images.flutter].map(circle=>(
          <div key={`circle_${circle}`} className='m-4 md:m-0 w-[100px] h-[100px] rounded-[50%] bg-white shadow-lg flex justify-center items-center'>
            <img src={circle} alt="circle" className='w-[60%] h-[60%]'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')