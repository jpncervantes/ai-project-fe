'use client';
import { Input } from '@/components/ui/input';
import { SENDER } from '@/lib/constants';
import ConversationHistory from './conversationHistory';
import { useEffect, useState } from 'react';
import { useChat } from '@/server/mutations/chatMutations';
import { useDispatch, useSelector } from 'react-redux';
import { addCoversation } from '../slice/chatSlice';

const ChatBot = () => {
  const [promptMessage, setPromptMessage] = useState('');
  const { sendChatPrompt } = useChat();
  const dispatch = useDispatch();
  const { conversation } = useSelector((state) => state.chat);

  const handleSend = () => {
    const newMessage = { source: SENDER.USER, message: promptMessage };
    const tempBotMessage = {
      source: SENDER.BOT,
      message: '...',
      isLoading: true,
    };
    dispatch(addCoversation(newMessage));

    //loading
    dispatch(addCoversation(tempBotMessage));
    setPromptMessage('');
    sendChatPrompt.mutate({ prompt: promptMessage });
  };

  return (
    <div className="flex h-[80%] w-[70%] flex-col items-center justify-center rounded-lg bg-neutral-50 p-12 shadow-lg">
      <div className="flex h-full w-full items-center justify-center p-5">
        {conversation?.length > 0 ? (
          <ConversationHistory conversation={conversation} />
        ) : (
          <span className="">Start Chatting</span>
        )}
      </div>
      <div className="relative flex w-[80%]">
        <Input
          value={promptMessage}
          onChange={(e) => setPromptMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Hello, Welcome!"
          className="h-[50px] w-full bg-white pr-10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute top-3 right-2 size-6 cursor-pointer transition-all hover:scale-110"
          onClick={handleSend}
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </div>
    </div>
  );
};

export default ChatBot;
