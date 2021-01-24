
import { SEARCH_SUCCESS, SEARCH_FAILURE } from './ActionTypes'
import axios from 'axios';

const searchProductSuccess = data => ({
    type: SEARCH_SUCCESS,
    payload: data
})

const searchProductFailure = data => ({
    type: SEARCH_FAILURE,
    payload: data
})

export const searchProducts = (searchInput,
    simType,
    simOpertaor) => {

    return dispatch => {
        const details = {
            search: searchInput,
            type: simType,
            operator: simOpertaor,
        };
        console.log(details,"details");
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            console.log({ encodedValue });
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://web.newagesme.com:7788/users/simcardlist', {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(async result => {
                console.log(result);
                if (result && result.status === true) {
                    console.log(result,"farhan")
                    dispatch(searchProductSuccess(result))
                } else {
                    dispatch(searchProductSuccess([]))
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(searchProductFailure(result))
                // alert('Something went gone wrong.');
            });


    }

}
