import React, {useState} from 'react'
// import {motion} from 'framer-motion'
// import {client} from '../client'
import {AppWrap, MotionWrap} from '../Wrapper'
import {images} from '../constants'

const Footer = () => {
  const [formData, setFormData] = useState({name:"", email:"", message:""})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const {name, email, message} = formData
  const handleInputChange=(e)=>{
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value})
  }
  const handleSubmit=()=>{
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // client.create(contact)
    // .then(()=>{
      
    //   setLoading(false)
    //   setIsFormSubmitted(true)
    // })

  }
  return (
    <div className='pt-[9rem] min-h-screen w-screen flex justify-center items-center flex-col'>
      <h2 className=''>Take a coffee & chat with me</h2>
      <div className='flex justify-center items-center flex-col md:flex-row w-full py-4 px-12 md:px-8'>
        <div className='w-full md:self-start flex-1 h-full'>
          <div className='card '>
            <img src={images.email} alt="email" />
            <a href="mailto:melahghislain17@gmail.com" className=''>melahghislain17@gmail.com</a>
          </div>
          <div className='card '>
            <img src={images.mobile} alt="mobile" />
            <a href="tell:675909367" className=''>(+237) 675909367</a>
          </div>
        </div>

        {!isFormSubmitted?
          <div className='w-full flex-[2] form flex justify-center items-center flex-col '>
            <div className='flex w-full flex-col md:flex-row'>
              <div className='input-wrapper mx-1 flex-1 '>
                <input type="text" className='input' placeholder='Your Name' name='name' value={name} onChange={handleInputChange}/>
              </div>
              <div className='input-wrapper mx-1 flex-1'>
                <input type="email" className='input' placeholder='Your Email' name='email' value={email} onChange={handleInputChange}/>
              </div>
            </div>
            
            <div className='input-wrapper'>
              <textarea className='textarea' placeholder='Your Message' name='message' value={message} onChange={handleInputChange}/>
            </div>
            <button type='button' className='w-full md:w-fit py-4 px-8 rounded-md border-none font-medium bg-indigo-600 text-white mt-8 cursor-pointer' onClick={handleSubmit}>{loading? "Sending" : "Send Message"}</button>
          </div>
          : <div>
            <h3 className=''> Thank you for getting in touch!</h3>
        </div>
        }
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Footer), 'contact', 'bg-white')