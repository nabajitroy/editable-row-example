import axios from 'axios';
import config from '../config';
const Communication = {
    getMethod(endpoint) {
        return axios.get(config.authUrl + endpoint).then(response => { return response.data; })
    },

    login(values) {
        return axios.post(config.authUrl, values).then(response => {
            //   console.log(response)
            return response;
        })
    }

};
export default Communication;