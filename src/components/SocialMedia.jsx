import React from 'react'
import {ScissorsIcon, ReplyIcon, MoonIcon, LinkIcon} from '@heroicons/react/outline'

const SocialMedia = () => {
  return (
    <div className='fixed left-1 bottom-4 z-[1]'>
        <div className='social'>
            <MoonIcon height='15px' />
        </div>
        <div className='social'>
            <ScissorsIcon height='15px' />
        </div>
        <div className='social'>
            <ReplyIcon height='15px' />
        </div>
        <div className='social'>
            <LinkIcon height='15px' />
        </div>
    </div>
  )
}

export default SocialMedia