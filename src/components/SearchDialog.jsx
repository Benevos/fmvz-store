'use client';

import React, { useRef } from 'react';
import { MdClose } from 'react-icons/md';

function SearchDialog() 
{
    const searchDialogRef = useRef(null);

    const handleCloseClick = () =>
    {
        const searchDialog = searchDialogRef.current;
        searchDialog.close();
    }

    return (
        <dialog ref={searchDialogRef} id='searchDialog' className='search-dialog'>
            <div className='search-dialog-content'>

                <div className='flex justify-between items-start p-2'>
                    <label className='text-auxiliarFive text-xl max-md:text-sm'>¿Qué es lo que buscas?</label> 
                    <button className='text-white' onClick={handleCloseClick}>
                        <MdClose size={20}/>
                    </button>
                </div>
                
                <input placeholder='Hoy quiero buscar...' className='search-dialog-input'/>

                <div className='search-dialog-button-contanier'>
                    <button>Buscar</button>
                </div>
                
            </div>
        </dialog>
    )
}

export default SearchDialog