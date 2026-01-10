import { Input } from "@/components/ui/input";

const ChatBot = () => {
    return (
        <div className="w-[70%] h-[80%] shadow-lg bg-neutral-50 flex flex-col justify-center items-center rounded-lg p-12">
            <div className="h-full flex items-center justify-center">
                <span className="">Start Chatting</span>
            </div>
            <div className="flex w-[80%] relative">
                <Input placeholder="Hello, Welcome!" className={"bg-white w-full h-[50px]"} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute right-2 top-3 cursor-pointer hover:scale-110 transition-all">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
            </div>
        </div>
    );
};

export default ChatBot;
