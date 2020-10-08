import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nick: "",
            message: ""
        };
    }


    handleSend() {
        this.props.postMessage({
            nick: this.state.nick,
            message: this.state.message
        });
    }

    render() {
        const {nick, message} = this.state;

        return <form>
            <input
                id ="nick"
                value={nick}
                type="text"
                onChange={e => this.setState({nick: e.target.value})}
            />
            <br/>
    <textarea
        value={message}
        onChange={e => this.setState({message: e.target.value})}
    >
    </textarea>
            <br/>
            <input
                id = "button"
                type="button"
                value="отправить"
                onClick={() => this.handleSend()}
            />
        </form>
    }
}

export default Form;


 /*
Hello
 */