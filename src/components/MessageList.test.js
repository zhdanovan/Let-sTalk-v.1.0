
import {shallow} from "enzyme";
import MessagesList from "./MessagesList";
import React from "react";

describe('MessagesList', () => {
    test('add message', () => {
        const messages = [
            {user: "name", message: "firstMessage"},]
        const component = shallow(<MessagesList messages={messages}/>);
        expect(component.find('Message')).toHaveLength(2);

    });

    test('add empty array', () => {
        const messages = [];
        const component = shallow(<MessagesList messages={messages}/>);
        expect(component.find('Message')).toHaveLength(0);

    });
});