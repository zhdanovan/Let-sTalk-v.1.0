import React from 'react';
import { mount } from 'enzyme';
import Message from './Message';
import renderer from 'react-test-renderer';

//Пометки
//toBe() — подходит, если нам надо сравнивать примитивные значения или является ли переданное значение ссылкой на тот же объект.
//toContain() — проверят содержит массив или итерируемый объект значение. Для сравнения используется оператор ===.
//toContainEqual() — проверяет или содержит массив элемент с ожидаемой структурой
//toHaveLength() — проверяет или свойство length у объекта соответствует ожидаемому



describe('Message', () => {
  test('Message shows nick and message', () => {
    const nick = 'test';
    const message = 'test';

    const component = mount(<Message user={nick} message={message} />);
    expect(component.text()).toContain(nick);
    expect(component.text()).toContain(message);
  });

  test('Message test with snapshot', () => {
    const user = 'test';
    const message = 'test';

    const component = renderer.create(<Message user={user} message={message} />);
    let componentSnapshot = component.toJSON();
    expect(componentSnapshot).toMatchSnapshot();
  });
});
