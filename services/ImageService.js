export const getCityImage = (city) => {
    let slug = city.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');
    let url = 'https://api.teleport.org/api/urban_areas/slug:'+ slug + '/images/';
    return fetch(url).then((res)=> res.json());

}

export const searchCity = (city) => {
    let url = 'https://api.teleport.org/api/cities/?search=' + city + '&limit=1';
    return fetch(url).then((res)=> res.json()).catch(
        function(error) {
          reject(new Error(`Unable to retrieve photos.\n${error.message}`));
        }
      );;
}