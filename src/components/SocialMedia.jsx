import React from 'react'
// import {ScissorsIcon, ReplyIcon, MoonIcon, LinkIcon} from '@heroicons/react/outline'
import {FaGithub, FaTwitter, FaLinkedin, FaTelegram} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='fixed left-1 bottom-4 z-[1]'>
        <a href='#' className='social'>
            <FaGithub />
        </a>
        <a href='#' className='social'>
            <FaTwitter className='' />
        </a>
        <a href='#' className='social'>
            <FaLinkedin  />
        </a>
        <a href='#' className='social'>
            <FaTelegram  />
        </a>
    </div>
  )
}

export default SocialMedia