import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from './MessageForm';

describe('MessageForm', () => {
    test('runs callback with proper values', () => {
        const message = 'Message';
        const nick = 'Nick';
        const handler = jest.fn();
        const component = shallow(<MessageForm postMessage={handler} />);
        component.find('input[type="text"]').simulate('change', { target: { value: nick } });
        component.find('textarea').simulate('change', { target: { value: message } });
        component.find('input[type="button"]').simulate('click');
        expect(handler).toHaveBeenCalledWith({
            nick,
            message
        });
    });
});
