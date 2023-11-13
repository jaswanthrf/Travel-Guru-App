import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': 'd1c14e424cmsh0495ab7ec7da4bfp126f70jsn74c9c92b9f29',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });

        return data;
    } catch (error) {
        console.log(error)

    }
}