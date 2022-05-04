import React, { useContext, useState } from 'react'
import AppContext from '../AppContext/AppContext'
import {motion} from 'framer-motion'

const Overlay = () => {
    const {hidden, setHidden} = useContext(AppContext)
    const [errors, setErrors] = useState({name: "", review: ""})
    const [value, setValue] = useState({name: "", company: "", review: "",profile: "" })

    const handleInputChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const name = isValid('name', "Name is required")
        const review = isValid('review', "Review is required")

        if(name && review){
            // if both conditions are true then it will not reset the form 
            setValue({name: "", company: "", review: "", profile: "",})
        }
        
        removeErrorMessage()
        // setHidden(true)
        
    }

    const isValid =(field, message)=>{
        if(value[field].trim() === ""){
            setErrors((data)=> { return {...data, [field]: message}})
            return false
        }
        setErrors((data)=> { return {...data, [field]: ""}})
        return true
    }
    const removeErrorMessage=()=>{
        setTimeout(()=>{
            setErrors({name: "", review: "",})
        }, 6000)
    }
    
  return (
    <motion.div 
        whileInView={{opacity: [0,1], scale: [0.5,1]}}
        className={`${hidden? 'hidden': 'flex'} h-screen w-screen fixed top-0 left-0 z-30 justify-center items-center`}>
        <div onClick={()=>setHidden(true)} className={`h-full w-full bg-slate-500/90 z-40`}></div>
        <div className='w-[90%] md:w-[60%] min-h-[60%] bg-white rounded-md z-50 absolute md:p-8'>
            <form onSubmit={handleSubmit}> 
                <div className='input-overlay-wrapper '>
                    <input type="text" name='name' value={value.name} onChange={handleInputChange} placeholder='Name*' className='input' />
                    {errors.name && <label htmlFor="name" className='text-red-500 text-xs pl-2'>{errors.name}</label>}
                </div>
                <div className='input-overlay-wrapper'>
                    <input type="text" name='company' value={value.company} onChange={handleInputChange}  placeholder='Company' className='input'/>
                    {/* <label htmlFor="company" className=''>Company error</label> */}
                </div>
                <div className='input-overlay-wrapper'>
                    <textarea name="review" placeholder='Review*' value={value.review} onChange={handleInputChange}   className='textarea' ></textarea>
                    {errors.review && <label htmlFor="review" className='text-red-500 text-xs pl-2'>{errors.review}</label>}
                </div>
                <div className='input-overlay-wrapper'>
                    {/* <label htmlFor="profile" className='mb-4'>Profile</label> */}
                    <input type="file" name='profile' value={value.profile} onChange={handleInputChange}  className='' />
                </div>
                <div className='flex flex-col justify-center items-center px-4 w-full my-3'>
                    <button className='text-white bg-indigo-500 w-full md:w-[50%] p-3 rounded-md transition-all duration-300 hover:scale-90 shadow-md hover:shadow-sm'>Submit</button>
                </div>
            </form>
        </div>
    </motion.div>
  )
}

export default Overlay