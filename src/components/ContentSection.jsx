import React from 'react'
import SectionList from './SectionList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const ContentSection = () => {
    return (
        <section className="flex flex-col gap-4">
            <SectionList title="Artistas" items={8} dataArray={artistArray} path='/artists' idPath='/artist' />

            <SectionList title="Músicas" items={16} dataArray={songsArray} path='/songs' idPath='/song' />

        </section>
    )
}

export default ContentSection

