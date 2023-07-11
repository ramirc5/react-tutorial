import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0083abd81d0049e08493c9388f692219'
    }
})

