import React from 'react';
import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp';

describe('Pruebas GitExpertApp', () => {
  const wrapper = shallow(<GitExpertApp />);

  test('Debe de retornar una pagina ', () => {
    const wrapper = shallow(<GitExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GitExpertApp />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
