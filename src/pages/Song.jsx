import React from 'react'
import MusicPlayer from '../components/MusicPlayer'
import { Link } from 'react-router-dom'


const Song = () => {
    return (
        <section className='grid grid-rows-1 flex-1 '>
            <div className='flex flex-col bg-body gap-10 my-0 mx-4 p-6 rounded-2xl rounded-b-none '>
                <div className=' flex items-center justify-center flex-1 '>
                    <img className='shadow-[0_0_20px_10px_#020b0580]' src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d" alt="Imagem da música X" />
                </div>
            </div>

            <div className='bg-[#020b05] py-4 px-6 grid grid-cols-[1fr_3fr_1fr] place-items-center flex-col gap-6 text-[#d2f9e0]'>
                <Link to={"/artist/1"} className='justify-self-start rounded-xl overflow-hidden'>
                    <img className='w-20 h-20' src="https://i.scdn.co/image/ab6761610000e5ebe78f7b1edae902872d399cfb" alt="Imagem do artista Y" />

                </Link>

                <MusicPlayer />

                <div>
                    <p className='text-xl font-bold'>Cantada Boba - Ao Vivo</p>
                    <p>Wind Rose</p>
                </div>
            </div>
        </section>
    )
}

export default Song