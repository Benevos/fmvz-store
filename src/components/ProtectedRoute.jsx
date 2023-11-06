'use client';

import { auth } from '@/scripts/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ProtectedRoute(Component) 
{
  return function AuthenticatedComponent(props) 
  {
    const [user, setUser] = useState(null);

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>
        {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);

    const router = useRouter();

    if (!user) 
    {
      router.push('/login');
      return null;
    }

    return <Component {...props} />;
  };
}

export default ProtectedRoute;