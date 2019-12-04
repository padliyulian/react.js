import axios from 'axios'

export function login(data) {
    return dispatch => {
        return axios.post('http://devsrv.mindaperdana.com/test-api/public/api/user/login', data)
    }
}