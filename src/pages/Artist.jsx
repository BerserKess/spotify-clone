import React from 'react'
import { artistArray } from '../assets/database/artists'
import { FaPlayCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SongList from '../components/SongList'
const Artist = () => {
    return (
        <section className='rounded-2xl container-margin overflow-hidden flex flex-col flex-1'>
            <div className='bg-cover bg-[position-y:15%] h-[40svh] p-6 flex items-end' style={{ backgroundImage: "linear-gradient(to bottom, #00000040, #00000040),url(https://i.scdn.co/image/ab6761610000e5ebe78f7b1edae902872d399cfb)" }}>
                <h2 className='text-8xl font-bold leading-[100%]'>Wind Rose</h2>
            </div>

            <div className='flex-1 bg-body p-6 py-10 relative flex flex-col gap-6 border-2'>
                <h2 className='text-[#d2f9e0] text-2xl font-bold'>
                    Populares
                </h2>
                <SongList />
            </div>
            <Link to={"/song/1"}>
                <FaPlayCircle className="fixed z-10 right-6 bottom-6 text-5xl text-[#20df63] cursor-pointer " />
            </Link>
        </section >
    )
}

export default Artist