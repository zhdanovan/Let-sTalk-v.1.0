import React from 'react';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';

describe('MessagesList', () => {
    test('add message', () => {
        const messages = [{ nick: 'test', message: 'test' }];
        const component = shallow(<MessagesList messages={messages} />);
        expect(component.find('Message')).toHaveLength(1);
    });
});
