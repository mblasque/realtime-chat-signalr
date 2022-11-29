import { Col, Row } from "reactstrap";
import { Message } from "../types";

import "./ChatMessage.scss";

type MessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: MessageProps) => {
  let isSelf = message.user === (window as any).user;

  return (
    <Row>
      <Col
        xs={{ offset: isSelf ? 0 : 2, size: 10 }}
        className={`message ${isSelf ? "self" : "third"}`}
      >
        <p>
          <strong>{message.user}</strong> says:
        </p>
        <p>{message.message}</p>
      </Col>
    </Row>
  );
};

export default ChatMessage;
