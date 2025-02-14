import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const MusicPlayer = ({ duration, randomIdNext, randomIdBack }) => {
    return (
        <div className='flex flex-col gap-1.5 items-center justify-self-stretch'>
            <div className='flex items-center gap-5 text-2xl'>
                <Link to={`/song/${randomIdBack}`}>
                    <FaBackwardStep className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63]" />
                </Link>
                <FaPlayCircle className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63] text-4xl" />
                <Link to={`/song/${randomIdNext + 5}`}>
                    <FaForwardStep className="text-green-50 cursor-pointer  transition-colors duration-200 ease-in hover:scale-105 hover:text-[#20df63]" />
                </Link>
            </div>
            <div className='flex items-center gap-2.5 w-full max-w-[600px]'>
                <p>00:00</p>
                <div className='h-1 bg-gray-500 w-full rounded-2xl'>
                    <div className='h-full bg-green-500 transition-[width] duration-[ease_ease]' style={{ width: "0%" }}></div>
                </div>
                <p>{duration}</p>
            </div>
        </div>
    )
}

export default MusicPlayer