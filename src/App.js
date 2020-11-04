
import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import ChatView from './views/ChatView';
import ProfileView from "./views/ProfileView";

class App extends React.Component{
    render(){
        return (
            <>
                <div className="links">
                    <Link to="/auth">Authentication</Link>&nbsp;
                    <Link to="/registration">Registration</Link>&nbsp;
                    <Link to="/profile">Profile</Link>&nbsp;
                    <Link to="/chat">Chat</Link>
                </div>
                <Switch>
                    <Route path="/auth" component={LoginView}/>
                    <Route path="/registration" component={RegistrationView}/>
                    <Route path="/profile" component={ProfileView}/>
                    <Route path="/chat" component={ChatView}/>
                    <Redirect exact from="/" to="/auth"/>
                </Switch>
            </>
        );
    }
}

export default App;







