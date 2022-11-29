import { ChangeEvent, FormEvent, useState } from "react";
import { Message } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Input, Label } from "reactstrap";

type ChatInputProps = {
  sendMessage(message: Message): Promise<void>;
};

const ChatInput = ({ sendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState<string>("");

  const messageIsValid = () => {
    return message && message !== "";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (messageIsValid()) {
      sendMessage({
        id: uuidv4(),
        user: (window as any).user,
        message: message,
      } as Message);

      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
    </form>
  );
};

export default ChatInput;
