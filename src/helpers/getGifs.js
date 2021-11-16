export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=sdFCjcowD6iaUBBO8bsBzWtNHOyVxwQh&q=${encodeURI(
    category
  )}&limit=10`;

  try {
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = await data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  } catch (error) {
    console.log(error);
  }
};
