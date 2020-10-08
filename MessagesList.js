import React from 'react';


class MessagesList extends React.Component {
    render(){
        const {messages}=this.props;
        return <ul>
            {messages.map((message,index)=>(
                <Messages nick = {message.nick}
                          message={message.message} key={index}/>
                ))}
        </ul>;
    }
}


export default MessagesList;
