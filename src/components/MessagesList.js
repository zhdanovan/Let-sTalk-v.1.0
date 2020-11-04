import React from 'react';
import Message from './Message';
import PropTypes from "prop-types";

class MessagesList extends React.Component {
    render() {
        const {messages} = this.props;

        return <>
            {messages.map((message, index) => (
                <Message user={message.user} message={message.message} key={index}/>
            ))}
        </>;
    }
}

MessagesList.propTypes = {
    messages: PropTypes.array
}


export default MessagesList;