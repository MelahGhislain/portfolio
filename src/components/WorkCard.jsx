import React from 'react'
import {motion} from 'framer-motion'
import {EyeIcon, LinkIcon} from '@heroicons/react/outline'

const WorkCard = ({item}) => {
   
  return (
    <div className='w-[250px] h-[350px] bg-transparent cursor-pointer m-1 perspective'>
        <div className='relative preserve-3d work-card w-full h-full duration-1000 '>
            <div className='absolute h-full w-full border-2 border-white rounded backface-hidden'>
                <img src={item.imageUrl} alt={item.title} className='w-full h-full object-cover'/>
            </div>
            <div className='absolute rotate-180 backface-hidden bg-gray-100 w-full h-full '>
                <div className='flex  items-center flex-col h-full w-full p-4'>
                    <p className='font-semibold text-xl'>{item.title}</p>
                    <p className='pt-4 text-sm text-neutral-500'>{item.description}</p>
                    <h4 className='self-start pt-2'>Stack</h4>
                    <marquee className='mt-2'>
                        <div className='flex space-x-1'>
                            {item.tags.map((stack, index)=>(
                                <p key={index} className='border-2 px-2 rounded bg-white border-indigo-200'>{stack}</p>
                            ))}
                        </div>
                    </marquee>
                    <div className='mt-8 flex justify-between items-center w-full'>
                        <motion.a
                            href={item.codeLink}
                            whileInView={{opacity: [0,1]}}
                            transition={{duration: .5 }}
                            className='mt-4 rounded-md bg-indigo-500 text-white px-4 py-2 shadow-lg transition-all duration-300 hover:shadow hover:scale-90'
                        >
                            code
                        </motion.a>
                        <motion.a
                            href={item.projectLink}
                            whileInView={{opacity: [0,1]}}
                            transition={{duration: .5 }}
                            className='mt-4 rounded-md bg-indigo-500 text-white px-4 py-2 shadow-lg transition-all duration-300 hover:shadow hover:scale-90'
                        >
                            Source
                        </motion.a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default WorkCard

// title: "Responsive Web App",
//     description: "A morden responsive web app",
//     projectLink: "https://www.example.com",
//     codeLink: "https://github.com",
//     imageUrl: images.about03,
//     tags: ["Flutter", "All"]