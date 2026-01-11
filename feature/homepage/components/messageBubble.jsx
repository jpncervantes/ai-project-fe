import { SENDER } from '@/lib/constants';
import { SyncLoader } from 'react-spinners';

const MessageBubble = ({ source, message, isLoading = false }) => {
  return (
    <span
      className={
        source === SENDER.BOT
          ? 'flex w-fit max-w-md rounded-lg bg-gray-300 px-3 py-2 text-sm wrap-break-word'
          : 'flex w-fit max-w-lg justify-end self-end rounded-lg bg-blue-200 px-3 py-2 text-sm wrap-break-word'
      }
    >
      {isLoading ? (
        <SyncLoader
          color="black"
          size={6}
          className="m-2"
          speedMultiplier={0.5}
        />
      ) : (
        message
      )}
    </span>
  );
};
export default MessageBubble;
