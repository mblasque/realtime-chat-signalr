import ChatInput from "../Components/ChatInput";
import ChatWindow from "../Components/ChatWindow";
import { HubConnection, HubConnectionState } from "@microsoft/signalr";
import { Message } from "../types";
import { Col, Row } from "reactstrap";

import "./Chat.scss";

type ChatProps = {
  connection: HubConnection | null;
  chat: Message[];
};

const Chat = ({ connection, chat }: ChatProps) => {
  const sendMessage = async (message: Message) => {
    if (connection?.state == HubConnectionState.Connected)
      try {
        await connection.send("SendMessage", message);
      } catch (e) {
        console.log(e);
      }
    else alert("Connection Lost");
  };

  return (
    <section className="chat">
      <Row>
        <Col
          sm={{ offset: 1, size: 10 }}
          md={{ offset: 2, size: 8 }}
          lg={{ offset: 3, size: 6 }}
          xl={{ offset: 4, size: 4 }}
        >
          <ChatWindow chat={chat} />
          <ChatInput sendMessage={sendMessage} />
        </Col>
      </Row>
    </section>
  );
};

export default Chat;
