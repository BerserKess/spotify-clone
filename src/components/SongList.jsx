import React from 'react'
import SongItem from './SongItem'

const SongList = () => {
    return (
        <div className='flex flex-col'>
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />

            <p className='ml-5 mt-5 font-bold cursor-pointer hover:text-[#79eca1]'>Ver mais</p>
        </div>
    )
}

export default SongList