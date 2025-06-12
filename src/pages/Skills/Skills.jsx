import React from 'react'
import SkillCard from '../../components/SkillCard'
import Header from '../../components/Header'
import { FaNodeJs } from "react-icons/fa";


function Skills() {
  return (
    <div className="bg-[#141414] w-full min-h-screen">
        <Header />
        <div className=''>
        <SkillCard icon={<FaNodeJs />} />
        </div>

    </div>
  )
}

export default Skills