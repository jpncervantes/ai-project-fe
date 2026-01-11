import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axios/axios';
import { useRouter } from 'next/navigation';

export function useRegister() {
  const router = useRouter();
  const registerUser = useMutation({
    mutationFn: (registerInfo) => axiosInstance.post('/register', registerInfo),
    onSuccess: (response) => {
      localStorage.setItem('authToken', response?.data?.token);

      //navigate to home on success
      router.push('/home');
    },
  });

  return { registerUser };
}
