import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';

/**
 * Компонент для отображения списка чатов
 */
class ChatList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(chat => (
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
        );
    }
}

ChatList.propTypes = {
    userId: PropTypes.string.isRequired,
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
