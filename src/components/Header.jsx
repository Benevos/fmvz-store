'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { LuMail } from 'react-icons/lu';
import { BiSearch } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';

function Header() 
{
    const handleSearchDialogClick = () =>
    {
        const windowInnerWidth  = window.innerWidth;

        if(windowInnerWidth <= 900)
        {
            const searchDialog = document.getElementById('searchDialog');
            searchDialog.showModal();
        }
    }

    return (
        <div className='w-full h-24 bg-white flex justify-around items-center fixed z-50 header'>
            <Image priority className='h-auto w-auto py-2 px-2 max-md:w-32' src={'/uat.png'} height={150} width={150} alt='UAT'/>

            <div className='flex'>
                <input className='headerSearchInput' placeholder='Hoy quiero buscar...'/>
                <button  onClick={handleSearchDialogClick} className='headerSearchButton flex items-center justify-center'>
                    <BiSearch/>
                </button>
            </div>

            <div className='flex'>
                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <LuMail size={18}/>
                    </div>
                </Link>

                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <MdOutlineCalendarMonth size={18}/>
                    </div>
                </Link>

                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <RiBillFill size={18}/>
                    </div>
                </Link>

                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <FaEarthAmericas size={18}/>
                    </div>
                </Link>

                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <IoMdSchool size={18}/>
                    </div>
                </Link>

                <Link href={'/#'}>
                    <div className='headerIcon'>
                        <FaUserCircle size={18}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header