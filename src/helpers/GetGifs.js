export const getGifs = async(category) =>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=z5Rmo0i4q35Pnb0cjXzFLfZZyPL5CY1X`;
  const resp = await fetch (url);
  const {data} = await resp.json();
  const gifs = data.map(img => {
    return{
      id:img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  });
  return(gifs);
};
