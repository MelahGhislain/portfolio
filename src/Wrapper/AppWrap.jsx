import React from 'react'
import{ NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) =>  function HOC(){
  return (
    <div id={idName} className={`${classNames} relative`}>
        {/* <SocialMedia /> */}

        <div className='flex justify-center items-center'>
            <Component />
            <div className='hidden'>
                <p>@2022 GIHISLAIN</p>
                <p>All rights reserved</p>
            </div>
        </div>
        {/* <NavigationDots active={idName}/> */}
    </div>
  )
}

export default AppWrap