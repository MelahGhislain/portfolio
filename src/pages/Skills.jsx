import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../Wrapper'
import {images} from '../constants'
const dataExperince = [
  {
    year: '2020 - 2021',
    works:[
      {
        name: "Frontend Developer",
        company: "Google",
        description: "I worked as a frontend developer at google",
      },
      {
        name: "Mobile Developer",
        company: "Google",
        description: "I worked as a frontend developer at google",
      },
      
    ],
  },
  {
    year: '2021 - 2022',
    works:[
      {
        name: "Backend Developer",
        company: "Google",
        description: "I worked as a backend developer at google",
      },
      {
        name: "Fullstack Developer",
        company: "Google",
        description: "I worked as a fullstack developer at google",
      },
    ],
  },
  
]
const color = "rgba(241, 245, 249, .3)"
const skillData = [
  {name: "html", icon: images.html, bgColor: color},
  {name: "css", icon: images.css, bgColor: color},
  {name: "js", icon: images.javascript, bgColor: color},
  {name: "node", icon: images.node, bgColor: color},
  {name: "react", icon: images.react, bgColor: color},
  {name: "flutter", icon: images.flutter, bgColor: color},
  {name: "python", icon: images.python, bgColor: color},
  {name: "redux", icon: images.redux, bgColor: color},
  {name: "sass", icon: images.sass, bgColor: color},
  {name: "ts", icon: images.typescript, bgColor: color},
  {name: "git", icon: images.git, bgColor: color},
  {name: "mu5", icon: images.mu5, bgColor: color},
]
const Skills = () => {
  const [experinces, setExperinces] = useState(dataExperince)
  const [skills, setSkills] = useState(skillData)

  return (
    <div className='pt-[9rem] min-h-screen flex-1 w-full flex justify-center items-center flex-col '>
    <h2 classNames='text-center '>Skills & Experience</h2>
    <div className='mt-12 flex justify-center items-start flex-col w-[100%] md:flex-row md:w-[80%]'>
      <motion.div
      className='flex-1 flex flex-wrap justify-start items-start mr-0 md:justify-start md:items-start md:mr-20 '//app_skill-list
      >
        {skills.map(skill=>(
          <motion.div
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5}}
          className='flex justify-center items-center flex-col m-4 transition duration-300 easeInOut px-8 md:px-0 '//app_skill list item
          key={skill.name}
          >
            <div className={`flex justify-center items-center bg-white w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[50%] 
            hover:shadow-lg shadow-white`} style={{backgroundColor: `${skill.bgColor}`}}>
              <img src={skill.icon} alt={skill.name} className='w-1/2 h-1/2' />
            </div>
            <p className='uppercase font-semibold mt-3'>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      {/* Experience */}
      <motion.div
        className='flex-1 flex flex-col justify-center items-center sm:flex-row sm:space-x-2 sm:justify-start sm:items-start md:flex-col mt-8 md:mt-0 px-12 md:px-0 w-full'// app_skills-exp
      >
        {experinces.map(experince=>(
          <motion.div
          className='w-full flex flex-row justify-center items-start sm:justify-start sm:items-start mt-4'//app_skills-exp-item
          key={experince.year}
          >
            <div className=' mr-4 md:mr-12'>
              <p className='font-extrabold text-indigo-600'>
                {experince.year}
              </p>
            </div>
            <motion.div
            className='flex-1 '//app_skills-exp-works
            >
              {experince.works.map(work=>(
                <motion.div
                  whileInView={{opacity: [0,1]}}
                  transition={{duration: 0.5}}
                  className='flex flex-col justify-start items-start mb-4 cursor-pointer'//app_skill-exp-work
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className='font-medium'>{work.name}</h4>
                  <p className='font-normal text-slate-500 mt-1'>{work.company}</p>
                  {/* <ReactTooltip
                    id={work.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='max-w-[300px]'
                  >
                    {work.description}
                  </ReactTooltip> */}
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
          
        ))}
      </motion.div>
    </div>

    </div>
  )
}

export default AppWrap(MotionWrap(Skills), 'skills', 'bg-white')