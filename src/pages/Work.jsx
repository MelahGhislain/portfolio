import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {AppWrap} from '../Wrapper'
import {images} from '../constants'
import WorkCard from '../components/WorkCard'
const data = [
  {
    title: "Responsive Web App",
    description: "A morden responsive web app it's purpose it to let the admin manage his task with ease hence provide features like user's and sales history ",
    projectLink: "https://www.example.com",
    codeLink: "https://github.com",
    imageUrl: images.about03,
    tags: ["Flutter", "Node", "Sanity"]
  },
  {
    title: "Responsive Mobile App",
    description: "A morden responsive web app it's purpose it to let the admin manage his task with ease hence provide features like user's and sales history ",
    projectLink: "https://www.example.com",
    codeLink: "https://github.com",
    imageUrl: images.about04,
    tags: ["React", "Node", "Mu"]
  },
  {
    title: "Responsive Web App",
    description: "A morden responsive web app it's purpose it to let the admin manage his task with ease hence provide features like user's and sales history ",
    projectLink: "https://www.example.com",
    codeLink: "https://github.com",
    imageUrl: images.about02,
    tags: ["React", "Node"]
  },
  {
    title: "Responsive Web App",
    description: "A morden responsive web app it's purpose it to let the admin manage his task with ease hence provide features like user's and sales history ",
    projectLink: "https://www.example.com",
    codeLink: "https://github.com",
    imageUrl: images.about01,
    tags: ["React", "Node"]
  },
]
const Work = () => {
  const filters = ["Web App", 'Mobile App', "React", 'Flutter', 'All']
  const[activeFilter, setActiveFilter] = useState('All')
  const[animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [works, setWorks] = useState(data)
  const [filterWork, setFilterWork] = useState(works)

  const handleWorkFilter = (item) => {

    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity:0}])

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}])
      if(item === "All"){
        setFilterWork(data)
      }else{
        setFilterWork(works.filter((work)=> work.tags.includes(item)))
      }
    }, 500)
  }
  return (
    <div className='min-h-screen flex-1 w-full flex justify-center items-center flex-col'>
      <h2 className='text-center pt-[9rem]'>
        My Creative
        <span className='text-indigo-500'> Portfolio </span> 
        Section
      </h2>
      {/* FILTERS */}
      <div className='flex justify-start items-center flex-wrap mt-16 mb-8'>
        {filters.map((item, index)=>(
          <div
            key={index}
           className={`px-4 py-2 cursor-pointer flex justify-center items-center rounded-lg bg-white font-semibold md:font-bold m-2
            transition duration-300 ease hover:bg-indigo-500 hover:text-white ${activeFilter === item? 'bg-indigo-500 text-white':''}`}
           onClick={()=>handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className='flex flex-wrap justify-center  items-center w-full py-8 px-8 '
      >
        {filterWork.map((item, index)=>(
          <WorkCard item={item} key={item.title}/>
        ))}
      </motion.div>
          
      
    </div>
  )
}

export default AppWrap(Work, 'work')