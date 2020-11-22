import React from 'react';
import apiService from '../apiService';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            password: '',
            result: null,
            error: null
        };
    }

    handleSubmit(e) {
        this.setState({
            result: null,
            error: null
        });
        apiService.auth
            .login({
                nickname: this.state.nickname,
                password: this.state.password
            })
            .then(() => {
                this.setState({ result: 'Успешно!' });
                setTimeout(() => this.props.history.push('/profile'), 2000);
            })
            .catch(error => this.setState({ error: 'Ошибка' + error.response.data.error }));
        e.preventDefault();
    }


    redirectAfterLogin() {
        const redirectUrl = this.props.location?.state.from.pathname
            ? this.props.location.state.from.pathname
            : '/profile';
        this.props.updateAuthHandler().then(() => this.props.history.push(redirectUrl));
    }


    render() {

        const { error, result } = this.state;

        return (
            <>
                <h1>Логин</h1>
                {this.state.error}
                {this.state.result}
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label>
                            Никнейм:&nbsp;
                            <input
                                type="text"
                                value={this.state.nickname}
                                onChange={e => this.setState({ nickname: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Пароль:&nbsp;
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </label>
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </>
        );
    }
}
