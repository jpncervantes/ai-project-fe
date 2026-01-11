import MessageBubble from './messageBubble';

const ConversationHistory = ({ conversation }) => {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-auto">
      {conversation?.map((message, idx) => (
        <MessageBubble
          key={idx}
          source={message?.source}
          message={message?.message}
          isLoading={message?.isLoading}
        />
      ))}
    </div>
  );
};

export default ConversationHistory;
