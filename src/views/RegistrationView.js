import React from 'react';
import { Formik } from 'formik';
import apiService from '../apiService';

export default class RegistrationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: null
        };
    }

    handleSubmit(values) {
        apiService.user
            .create(values)
            .then(() => {
                this.setState({ result: 'Пользователь успешно зарегистрирован' });
                setTimeout(() => this.props.history.push('/login'), 2000);
            })
            .catch(error => this.setState({ error: 'Ошибка: ' + error.response.data.error }));
    }

    render() {
        const { error, result } = this.state;

        return (
            <>
                <h1>Регистрация</h1>
                <div>{error && <span style={{ color: 'red' }}>{error}</span>}</div>
                {result}
                <Formik
                    initialValues={{ nickname: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.nickname) {
                            errors.nickname = 'Введите никнейм';
                        }
                        if (!values.password) {
                            errors.password = 'Введите пароль';
                        }
                        if (values.password.length < 7) {
                            errors.password = 'Длина пароля должна быть больше 6 символов';
                        }
                        return errors;
                    }}
                    onSubmit={values => {
                        this.handleSubmit(values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            {errors.nickname && touched.nickname && (
                                <div style={{ color: 'red' }}>{errors.nickname}</div>
                            )}
                            <div>
                                <label>
                                    Никнейм:&nbsp;
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={values.nickname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>
                            </div>
                            {errors.password && touched.password && (
                                <div style={{ color: 'red' }}>{errors.password}</div>
                            )}
                            <div>
                                <label>
                                    Пароль:&nbsp;
                                    <input
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>
                            </div>
                            <button type="submit">Создать пользователя</button>
                        </form>
                    )}
                </Formik>
            </>
        );
    }
}
