import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas GifGrid.jsx', () => {
  const item = {
    url: 'https://media1.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=12100ec9lzk6gum9djjurk3i209s81k9ktrp8luz4haam66q&rid=giphy.gif&ct=g',
    title: 'one punch GIF by Adult Swim',
  };

  const wrapper = shallow(<GifGridItem {...item} />);

  /* PRUEBAS */
  test('Debe  de retornar un component ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(item.title);
  });

  test('Debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();

    expect(src).toBe(item.url);
    expect(alt).toBe(item.title);
  });

  test('debe de tener animate__bounce', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__bounce')).toBe(true);
  });
});
