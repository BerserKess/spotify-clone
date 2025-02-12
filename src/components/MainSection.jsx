import ContentSection from "./ContentSection";
import React from 'react'

const MainSection = () => {
    return (
        <main className="flex flex-col flex-1 gap-10 bg-linear-to-b from-[#062d14] to-[#020b05] mt-0 mr-2 mb-2 p-6 rounded-2xl">
            <ContentSection />
        </main>
    )
}

export default MainSection
