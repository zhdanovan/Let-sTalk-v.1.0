import React from 'react';

class Message extends React.Component {
    render() {
        const { nickname, content } = this.props;
        return (
            <li>
                <b>{nickname}:</b>
                {content}
            </li>
        );
    }
}

export default Message;
