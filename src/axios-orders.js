import axios from "axios";

const instance = axios.create({
    baseURL: 'https://yamarsana-shop.firebaseio.com/'
});

export default instance;