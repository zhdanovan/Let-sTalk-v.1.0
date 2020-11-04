import React from 'react';
import PropTypes from "prop-types";


class Message extends React.Component {
    render() {
        const {nick, message} = this.props;
        return <li>
            <b>{nick}:</b>
            {message}
        </li>;
    }
}


Message.propTypes = {
    nick: PropTypes.string,
    message: PropTypes.string
}


export default Message;
