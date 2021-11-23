import React from 'react';
import { shallow } from 'enzyme';
import CategroyAdd from '../../components/CategroyAdd';

describe('Pruebas en el componentes CategoryAdd', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<CategroyAdd setcategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategroyAdd setcategories={setCategories} />);
  });

  test('Debe dem ostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });

  test('No debe de postear la informacion onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe de llamar el setCategorries y limpiar la caja de texto', () => {
    let input = wrapper.find('input');
    const value = 'One Piece';

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    input = wrapper.find('input');

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
