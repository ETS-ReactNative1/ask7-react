import React from 'react';
import './index.sass';
import MyPhone from 'components/MyPhone';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';

function Chatbox() {
  return (
    <div className="chatbox-container">
      <Message>
        <Bubble content="Привет, это сайт моей студии! 🤗" />
        <Bubble content="Я занимаюсь дизайном и разработкой сайтов" />
      </Message>
      <Message>
        <WorkList />
      </Message>
      <Message>
        <Bubble content={<MyPhone />} />
      </Message>
    </div>
  );
}

export default Chatbox;
