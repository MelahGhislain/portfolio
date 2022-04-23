import React from 'react'

const NavigationDots = ({active}) => {
    const navItems = ["home", "about", "work", "skills", 'testimonials', "contact"]
  return (
    <div className='absolute right-5 md:bottom-[50%]  z-[5] md:flex flex-col '>
        {navItems.map((item, index)=>(
            <a 
                key={`${item}${index}`} 
                href={`#${item}`} 
                className='w-[10px] h-[10px] rounded-full m-1 bg-slate-600'
                style={active === item?{backgroundColor: '#313BAC'}: {}}
            > </a>
            
        ))}
    </div>
  )
}

export default NavigationDots