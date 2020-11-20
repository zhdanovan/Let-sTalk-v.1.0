import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
    render() {
        const { messages } = this.props;
        return (
            <ul>
                {messages.map(message => (
                    <Message
                        content={message.content}
                        nickname={message.nickname}
                        key={message.id}
                    />
                ))}
            </ul>
        );
    }
}

export default MessagesList;
