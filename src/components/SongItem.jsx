import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = () => {
    return (
        <Link to={"/song/1"} className='flex gap-6 items-center justify-between cursor-pointer py-2.5 px-2.5 transition duration-200 ease-in hover:bg-green-900 hover:text-[#79eca1]'>
            <div className='flex items-center gap-6'>
                <p>1</p>
                <div className='flex gap-3 items-center'>
                    <img className='max-w-10 rounded-sm' src="https://i.scdn.co/image/ab67616d00001e028aca7c95468481cf5411060e" alt="Imagem da Música X" />
                    <p className='font-medium '>Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                </div>
            </div>
            <p className='justify-end'>3:03</p>
        </Link>
    )
}

export default SongItem