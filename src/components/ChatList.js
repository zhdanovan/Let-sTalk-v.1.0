import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';

class ChatList extends React.Component {
    render() {
        return (
            <>
                {this.props.list.length ? (
                    <ul>
                        {this.props.list.map((chat) => (
                            <Chat
                                userId={this.props.userId}
                                chat={chat}
                                goHandler={this.props.goHandler}
                                joinHandler={this.props.joinHandler}
                                deleteHandler={this.props.deleteHandler}
                                key={chat.id}
                            />
                        ))}
                    </ul>
                ) : (
                    <span>There are no chats yet :с</span>
                )}
            </>
        );
    }
}

ChatList.propTypes = {
    userId: PropTypes.string,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            participants: PropTypes.arrayOf(PropTypes.string)
        })
    ),
    goHandler: PropTypes.func,
    joinHandler: PropTypes.func,
    deleteHandler: PropTypes.func
};

export default ChatList;
