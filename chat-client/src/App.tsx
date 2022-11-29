import { useEffect, useRef, useState } from "react";
import { Message } from "./types";
import {
  HubConnection,
  HubConnectionBuilder,
} from "@microsoft/signalr";
import Chat from "./Pages/Chat";

function App() {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  const [chat, setChat] = useState<Message[]>([]);

  const latestChat = useRef<Message[] | null>(null);

  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/hubs/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((_) => {
          console.log("Connected to http://localhost:5000/hubs/chat");

          connection.on("ReceiveMessage", (message) => {
            const updatedChat = [...(latestChat.current as Message[])];
            updatedChat.push(message);

            setChat(updatedChat);
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  return (
    <>
      <Chat connection={connection} chat={chat} />
    </>
  );
}

export default App;
