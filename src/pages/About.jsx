import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../constants'
import {AppWrap, MotionWrap} from '../Wrapper'

const About = () => {
  const abouts = [
    { title: "Web Development", description: "I am a good web developer", imageUrl: images.about01},
    { title: "Mobile Development", description: "I am a good Mobile developer", imageUrl: images.about02},
    { title: "Backend Developement", description: "I am a good backend developer", imageUrl: images.about03},
    { title: "Database Development", description: "I am a good database developer", imageUrl: images.about04},
  ]
  return (
    <div id="about" className='flex-1 w-full flex flex-col min-h-screen'>
      <h2 className='text-center pt-[7rem]'>
        I Know That 
        <span className='text-indigo-500'> Good Development</span> <br />
        means
        <span className='text-indigo-500'> Good Business</span>
      </h2>
      <div className='flex justify-center  items-start flex-wrap mt-8'>
        {abouts.map((about, index)=>(
          <motion.div
            whileInView={{ opacity: [0,1]}}
            whileHover={{scale: 1.1}}
            transition={{duration:0.5, type: 'tween'}}
            key={about.title + index}
            className='w-[270px] md:w-[250px] h-[290px] md:m-4 flex justify-start items-start flex-col m-4 rounded-md hover:shadow-lg relative'
          >
            <img src={about.imageUrl} alt={about.title} className='w-full h-full object-cover rounded-md'/>
            <div className='w-full rounded-br-md rounded-bl-md absolute bottom-0 bg-gradient-to-b from-slate-100/70 to-slate-300/50'>
              <h4 className='px-2 mt-1'>{about.title}</h4>
              <p className='px-2 pb-2'>{about.description}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About), 
  'about', 
  "bg-white"
)