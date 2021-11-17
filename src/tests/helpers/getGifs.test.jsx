import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fecth', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('Debe de traer un array vacio', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
