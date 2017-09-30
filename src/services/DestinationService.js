import axios from 'axios';

export class DestinationService{

    constructor() {
        // this.baseURL = baseURL;
    }

    getDestinationListQuery() {
        let url = "/here/getDestinationList"
        try{
            return axios.get(url);
        }catch (e){
            alert(e.message)
        }
    }

    getCategoryListQuery() {
        let url = "/here/getPlacesCategories"
        try{
            return axios.get(url);
        }catch (e){
            alert(e.message)
        }
    }
}
