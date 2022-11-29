import { Message } from "../types";
import ChatMessage from "./ChatMessage";

import "./ChatWindow.scss";

type ChatWindowProps = {
  chat: Message[];
};

const ChatWindow = ({ chat }: ChatWindowProps) => {
  return (
    <div className="chat-window">
      {chat.map((m: Message) => (
        <ChatMessage key={m.id} message={m} />
      ))}
    </div>
  );
};

export default ChatWindow;
