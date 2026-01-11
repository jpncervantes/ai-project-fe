'use client';
import LoginForm from '@/feature/login/form/loginForm';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      router.replace('/home');
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecked(true);
    }
  }, [router, setChecked]);

  if (!checked) return null;
  return (
    <div className="relative flex h-screen">
      <h1 className="absolute w-full p-4 text-4xl font-extrabold tracking-tight text-balance">
        ai app
      </h1>
      <div className="flex h-full w-full items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
