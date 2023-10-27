import React from 'react'

function Navbar() {
  return (
    <nav className='navbar py-0'>
        <ul className='flex items-center justify-center h-full w-full mb-0 p-0'>
            <li className='navListItem'>
                📚 Categorias
            </li>
            <li className='navListItem'>
                💯 Ofertas
            </li>
            <li className='navListItem'>
                🔥 Tendencias
            </li>
            <li className='navListItem'>
                ✨ Nuevos
            </li>
        </ul>
    </nav>
  )
}

export default Navbar