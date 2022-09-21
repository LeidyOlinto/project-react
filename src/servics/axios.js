import axios from "axios";


const api = axios.create({ 
    baseURL: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce',
    headers:{ 
        'Content-type':'application/json'
    }
});

export default api;