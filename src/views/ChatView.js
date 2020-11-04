import React from 'react';
import axios from 'axios';
import Form from '../components/Form';
import MessagesList from "../components/MessagesList";


const URL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

class ChatView extends React.Component {
    constructor() {
        super();
        this.state = {
            serverMessages: []
        };

        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.getMessages.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    sendMessage(newMessage) {
        instance
            .post('/', {
                nick: newMessage.nick,
                message: newMessage.message
            })
            .then(response => this.parseMessages(response.data))
            .catch(error => console.error(error));
    }

    getMessages() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status !== 200) {
                console.error('Ошибка!');
            } else {
                this.parseMessages(xhr.response);
            }
        };
    }

    parseMessages(response) {
        const newServerMessages = JSON.parse(response);
        this.setState({
            serverMessages: newServerMessages
        });
    }

    render() {
        const {serverMessages} = this.state;

        return <>
            <h1>Chat</h1>
            <Form sendMessage={(newMessage) => this.sendMessage(newMessage)}/>
            <MessagesList messages={serverMessages}/>
        </>
    }
}

export default ChatView;