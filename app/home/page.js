'use client';
import axiosInstance, { getCsrfCookie } from '@/server/axios/axios';
import ProtectedRoute from '@/lib/protectedRoute';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ChatBot from '@/feature/homepage/components/chatbot';

const HomePage = () => {
  const handleClick = () => {
    refetchTestApi();
  };

  const { data, refetch: refetchTestApi } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const response = await axiosInstance.get('/test-api');
      return response.data;
    },
    enabled: false,
  });
  return (
    <ProtectedRoute>
      <div className="relative flex h-screen">
        <h1 className="absolute w-full p-4 text-4xl font-extrabold tracking-tight text-balance">
          ai app
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <ChatBot />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
