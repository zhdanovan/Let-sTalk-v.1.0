import React from 'react';
import Chat from '../components/Chat';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Chat',
    component: Chat
};

const Template = args => <Chat {...args} />;

const chat = {
    id: '0b634621ac63b',
    createdAt: '2020-11-11T11:16:03.903Z',
    title: 'Мой супер чат',
    userId: '1',
    participants: ['1', '2'],
    isPrivate: false
};

export const Owner = Template.bind({});
Owner.args = {
    userId: '1',
    chat,
    goHandler: action('go'),
    joinHandler: action('join'),
    deleteHandler: action('delete')
};

export const Participant = Template.bind({});
Participant.args = {
    userId: '2',
    chat,
    goHandler: action('go'),
    joinHandler: action('join'),
    deleteHandler: action('delete')
};

export const NotParticipant = Template.bind({});
NotParticipant.args = {
    userId: '3',
    chat,
    goHandler: action('go'),
    joinHandler: action('join'),
    deleteHandler: action('delete')
};
