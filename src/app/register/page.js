'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ProtectedRoute from '@/components/ProtectedRoute';
import SearchDialog from '@/components/SearchDialog'
import TopFiller from '@/components/TopFiller'
import { auth } from '@/scripts/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Register() 
{
  const [userData, setUserData] = useState({email: '', password: '', confirmedPassword: ''});

  const handleSumbit = async (e) =>
  {
    e.preventDefault();

    if(userData.email.trim() === '' || userData.password.trim() === '' || userData.confirmedPassword === '')
    {
      alert('No deje espacios en blanco')
      return;
    }

    if(userData.password !== userData.confirmedPassword)
    {
     alert('Las contraseñas no coinciden');
      return;
    }

    try
    {
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    }
    catch({message})
    {
      alert(message);
      return;
    }
    
    alert('Usuario creado con exito');
    setUserData({user: '', password: '', confirmedPassword: ''});
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

            <label>Confirmar contraseña:</label>
            <input onChange={handleChange} value={userData.confirmedPassword} type='password' name='confirmedPassword' placeholder='Contraseña'/>

            <div className='flex items-center justify-center mt-2'>
              <Link href={'/login'} className='text-blue-600 hover:text-blue-800 visited:text-purple-600 text-center'>¿Ya tiene cuenta? Incie sesión</Link>
            </div>
            
            <button>Registrarse ahora</button>
          </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Register;