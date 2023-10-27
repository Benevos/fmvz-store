import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar py-0'>
        <ul className='flex items-center justify-center h-full w-full mb-0 p-0'>
            <li className='navListItem'>
                <Link href={'/#'}>📚 Categorias</Link>
            </li>
            <li className='navListItem'>
                <Link href={'/#'}>💯 Ofertas</Link>
            </li>
            <li className='navListItem'>
                <Link href={'/#'}>🔥 Tendencias</Link>
            </li>
            <li className='navListItem'>
                <Link href={'/#'}>✨ Nuevos</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar