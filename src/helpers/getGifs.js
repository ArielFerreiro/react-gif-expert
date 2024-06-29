
export const getGifs = async (category) => {
    const API_KEY = 'S8B5iN8sUjY3EGBftTmQU0bkE5m32Wx5';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}