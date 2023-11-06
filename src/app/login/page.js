'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchDialog from '@/components/SearchDialog'
import TopFiller from '@/components/TopFiller'
import { auth } from '@/scripts/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Login() 
{
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [userData, setUserData] = useState({email: '', password: ''});

  useEffect(() =>
  {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>
      {
          setUser(currentUser);
      })

      return () => unsubscribe();
  }, []);

  if(user)
  {
    router.push('/');
  }

  const handleSumbit = async (e) =>
  {
    e.preventDefault();

    if(userData.email.trim() === '' || userData.password.trim() === '' )
    {
      alert('No deje espacios en blanco')
      return;
    }

    try
    {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    }
    catch({message})
    {
      alert(message);
      return;
    }
    
    alert('Sesión iniciada con éxito');
    setUserData({user: '', password: '', confirmedPassword: ''});
    router.push('/');
  }
  
  const handleChange = ({ target: { name, value } }) =>
  {
    setUserData({...userData, [name]: value});
  }
  
  return (
    <div>
        <SearchDialog/>
        <Header/>     
        
        <TopFiller/>
        <Navbar/>

        <div className='login-container'>
          <form onSubmit={handleSumbit} className='login-form'>
            <label>Correo:</label>
            <input onChange={handleChange} value={userData.email} type='email' name='email' placeholder='correo@dominio.com'/>

            <label>Contraseña:</label>
            <input onChange={handleChange} value={userData.password} type='password' name='password' placeholder='Contraseña'/>
            
            <div className='flex items-center justify-center mt-2'>
              <Link href={'/register'} className='text-blue-600 hover:text-blue-800 text-center visited:text-purple-600'>¿No tiene cuenta? Cree una</Link>
            </div>
            
            <button>Inciar sesión</button>
          </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Login;