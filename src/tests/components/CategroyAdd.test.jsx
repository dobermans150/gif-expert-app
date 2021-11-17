import React from 'react';
import { shallow } from 'enzyme';
import CategroyAdd from '../../components/CategroyAdd';

describe('Pruebas en el componentes CategoryAdd', () => {
  const setCategories = () => {};
  const wrapper = shallow(<CategroyAdd setcategories={setCategories} />);

  test('Debe dem ostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });
});
