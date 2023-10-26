'use client';

import React from 'react';
import Image from 'next/image';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { LuMail } from 'react-icons/lu';
import { BiSearch } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';

function Header() 
{
    const normalIconColor = '#777c81';

    return (
        <div className='w-full h-fit bg-white flex justify-around items-center'>
            <Image priority className='h-auto w-auto py-2 px-2 max-md:w-32' src={'/uat.png'} height={150} width={150} alt='UAT'/>

            <div className='flex'>
                <input className='headerSearchInput' placeholder='Hoy quiero buscar...'/>
                <button className='headerSearchButton flex items-center justify-center'>
                    <BiSearch/>
                </button>
            </div>

            <div className='flex'>
                <div className='headerIcon'>
                    <LuMail size={18}/>
                </div>

                <div className='headerIcon'>
                    <MdOutlineCalendarMonth size={18}/>
                </div>
                
                <div className='headerIcon'>
                    <RiBillFill size={18}/>
                </div>
                
                <div className='headerIcon'>
                    <FaEarthAmericas size={18}/>
                </div>

                <div className='headerIcon'>
                    <IoMdSchool size={18}/>
                </div>

                <div className='headerIcon'>
                    <FaUserCircle size={18}/>
                </div>
            </div>
        </div>
    )
}

export default Header