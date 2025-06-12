import React from 'react'
import { FaNodeJs } from "react-icons/fa";

function SkillCard({icon , title, description}) {
return (
    <div className='bg-zinc-800 rounded-lg w-36 h-36 flex justify-center items-center flex-col gap-3 transition-all duration-300 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] hover:scale-110 cursor-pointer'>
            <div className='text-red-700 text-xl'> {icon}</div>
            <p className='font-mono font-bold text-white text-lg'>{title}</p>
            <p className='text-zinc-700 text-sm'>{description}</p>
    </div>
)
}

export default SkillCard