
import React from 'react';

class Message extends React.Component{
    render(){
        const {nick,message}=this.props;
        return <li>
            <b>{nick}:</b>
            {message}
        </li>;
    }
}

export default Message;
