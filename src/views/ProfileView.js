import React from 'react';
import apiServices from "../apiServices";

export default class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            errorMessage: ""
        };
    }

    componentDidMount() {
        apiServices.user
            .getProfile()
            .then(response => response.data)
            .then(user => this.setState({user}))
            .catch(error => this.setState({errorMessage: "Error! " + error.response.data.error}));
    }

    render() {
        const {user, errorMessage} = this.state;
        return (
            <>
                <h1>Profile</h1>
                {user && (
                    <>
                        <div className="profile">
                            ID: {user.id}
                        </div>
                        <div className="profile">
                            Nickname: {user.nickname}
                        </div>
                        <div className="profile">
                            Created: {new Date(user.createdAt).toLocaleString()}
                        </div>
                    </>
                )}
                {errorMessage}
            </>
        );
    }
}