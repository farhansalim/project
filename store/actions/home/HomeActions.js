import { LIST_USER_SUCCESS, LIST_USER_FAILURE } from '../ActionTypes';
import Axios from 'axios';

const getUsersListSuccess = (data) => ({
    type: LIST_USER_SUCCESS,
    payload: data
})

const getUsersListFailure= (data) => ({
    type: LIST_USER_FAILURE,
    payload: data
})

export const getUsersList = (details) => {
    return dispatch => {
        return Axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res.data.data, "list")
                dispatch(getUsersListSuccess(res.data.data))
            })
            .catch(err => {
                dispatch(getUsersListFailure(err))
                console.log(err, "list err")
            })

    }

}

