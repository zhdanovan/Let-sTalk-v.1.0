import React from 'react';
import {shallow} from 'enzyme';
import Message from './MessageForm';

test('Message shows nick and message', () => {
    const nick = 'test';
    const message = 'test';
    const component = shallow(<Message nick={nick} message={message}/>);
    expect(component.text()).toContain(nick);
    expect(component.text()).toContain(message);
});