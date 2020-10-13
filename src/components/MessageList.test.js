import React from 'react';
import {shallow} from 'enzyme';
import MessageList from './MessageList';

describe('MessagesList', () => {
    test('add message', () => {
        const messages = [
            {user: "test", message: "test"}];
        const component = shallow(<MessagesList messages={messages}/>);
        expect(component.find('Message')).toHaveLength(1);

    }});

