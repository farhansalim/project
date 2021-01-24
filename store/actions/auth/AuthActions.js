import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../ActionTypes';
import Axios from 'axios';

export const onLogin = (details) => {
    return dispatch => {

        console.log(details, "details");
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            console.log({ encodedValue });
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

       return fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(async result => {
                console.log(result,"farhan")
                return result;
            })
            .catch(error => {
                throw result
            });


    }

}

export const onSignUp = (details) => {
    return dispatch => {

        console.log(details, "details");
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            console.log({ encodedValue });
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

      return  fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(async result => {
                // console.log(result,"farhan")
                return result
            })
            .catch(error => {
                return error

            });


    }

}