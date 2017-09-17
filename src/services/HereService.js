import axios from 'axios';

export class HereService{

    constructor() {
        // this.baseURL = baseURL;
    }

    postPopularPlacesQuery(data) {
        let url = "/here/getPopularPlaces"
        try{
            // let params = new URLSearchParams();
            // params.append('Lat', data.lat);
            // params.append('Lon', data.lon);
            // params.append('Category', data.category);
            return axios.post(url,data);
        }catch (e){
            alert(e.message)
        }
    }

    postPopularPlaceDetails(data)
    {
        let url = "/here/getPopularPlaceDetails"
        try{
            return axios.post(url,data);
        }catch (e){
            alert(e.message)
        }

    }
}
