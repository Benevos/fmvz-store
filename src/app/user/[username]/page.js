'use client';

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchDialog from '@/components/SearchDialog'
import TopFiller from '@/components/TopFiller'
import { auth } from '@/scripts/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation';
import React, {useState, useEffect} from 'react'

function User() 
{
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>
        {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);

    const handleClick = async () =>
    {
        await signOut(auth);
        router.push('/');
    }
   

    return (
    <div>
        <SearchDialog/>
        <Header/>     
        
        <TopFiller/>
        <Navbar/>

        <div className='user-container'>
            <div className='user'>
                <h2>Bienvenido {user ? user.email : 'cargando...'}</h2>
                <button onClick={handleClick}>Cerrar sesión</button>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default User;