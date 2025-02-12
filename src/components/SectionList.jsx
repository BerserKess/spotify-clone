import React from 'react'
import SectionItem from './SectionItem'
import { Link } from 'react-router-dom'

const SectionList = ({ title, items, dataArray, path, idPath }) => {
    return (
        <>
            <div className="flex justify-between">
                <p className="text-[#d2f9e0] text-2xl">{title} populares</p>
                <Link to={path} className="text-[#d2f9e0] hover:text-[#79eca1] transition duration-300 cursor-pointer ">Mostrar tudo</Link>
            </div>
            <div className="grid grid-cols-8">
                {dataArray.filter((item, index) => index < items).map((dataItem, index) =>
                (
                    <SectionItem {...dataItem} key={`${title}-${index}`} idPath={idPath} />
                ))}
            </div>
        </>
    )
}

export default SectionList