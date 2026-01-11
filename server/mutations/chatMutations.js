import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axios/axios';
import { useDispatch } from 'react-redux';
import { replaceLastBotMessage } from '@/feature/homepage/slice/chatSlice';

export function useChat() {
  const dispatch = useDispatch();
  const sendChatPrompt = useMutation({
    mutationFn: (prompt) => axiosInstance.post('/prompt', prompt),
    onSuccess: (response) => {
      console.log(response, 'responsefromai');
      dispatch(replaceLastBotMessage(response?.data?.result));
    },
  });
  return { sendChatPrompt };
}
