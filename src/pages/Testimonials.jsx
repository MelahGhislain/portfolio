import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../Wrapper'
import {images} from '../constants'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'
const testimonialData = [
  {name: 'Ghislain', company: "Netflix", image: images.css, feedback:"Ghislain is an awsome developer Ghislain is an awsome developer Ghislain is an awsome developer Ghislain is an awsome developer"},
  {name: 'Ghislain', company: "Netflix", image: images.vue, feedback:"Ghislain is an awsome developer"},
  {name: 'Ghislain', company: "Netflix", image: images.python, feedback:"Ghislain is an awsome developer"},
]
const brandData = [
  {name: "New Balance", imageUrl: images.nb},
  {name: "Spotify", imageUrl: images.spotify},
  {name: "Skype", imageUrl: images.skype},
  {name: "Bolt", imageUrl: images.bolt},
]
const Testimonials = () => {
  const [brands, setBrands] = useState(brandData)
  const [testimonials, setTestimonials] = useState(testimonialData)
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonial = testimonials[currentIndex]

  const handleClick=(index)=>{
    setCurrentIndex(index)
  }

  return (
    <div className='pt-[6rem] min-h-screen w-screen flex justify-center items-center flex-col'>
      {testimonials.length && (
        <>
          <div className='flex-1 flex flex-col sm:flex-row justify-center items-center w-[80%] md:w-[60%] min-h-[320px] bg-white p-8 rounded-lg shadow-lg transition-all duration-300 easeInOut'>
            <img src={testimonial.image} alt="testimonial" className='w-[20%] h-full rounded-full object-cover mb-4 sm:mb-0' />
            <div className='flex-1 h-full py-0 px-8 text-left flex flex-col justify-around items-start sm:ml-5'>
              <p className='text-lg leading-8'>{testimonial.feedback}</p>
              <div>
                <h4 className='text-indigo-600 font-semibold mt-8'>{testimonial.name}</h4>
                <h5 className='font-normal mt-2 text-slate-500'>{testimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-4'>
            <div className='btn' onClick={()=>handleClick(currentIndex === 0? testimonials.length-1 : currentIndex-1)}>
                <ChevronLeftIcon className='text-indigo-600' height='25px'/>
            </div>
            <div className='btn' onClick={()=>handleClick(currentIndex === testimonials.length-1 ? 0 : currentIndex+1)}>
                <ChevronRightIcon className='text-indigo-600' height='25px'/>
            </div>
          </div>
        </>
      )}
    {/* Brands */}
      <div className='flex justify-center items-center w-[80%] flex-wrap py-4' >
        {brands.map(brand=>(
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5, type: 'tween'}}
            key={brand._id}
            className='w-[150px] m-6 '
          >
            <img src={brand.imageUrl} alt={brand.name} className='w-full h-auto object-cover grayscale-[1] hover:grayscale-0 transition duration-300'/>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Testimonials), 'testimonials', )