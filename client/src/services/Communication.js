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
    },

    list() {
        return axios.get(config.baseUrl + `/procure_to_pay/list/`).then(response => {
            return response;
        })
    },

    update(values) {
        return axios.put(config.baseUrl + `procure_to_pay/update/${values.id}`, values).then(response => {
            return response;
        })
    },
    create(values) {
        return axios.post(config.baseUrl + `procure_to_pay/create`, values).then(response => {
            return response;
        })
    },
    delete(id) {

        return axios.delete(config.baseUrl + `procure_to_pay/delete/${id}`).then(response => {
            return response;
        })
    }

};
export default Communication;