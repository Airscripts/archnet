/**
 * Importing action types.
 */
import {
    GENERAL_REQUEST,
    GENERAL_SUCCESS,
    GENERAL_FAILURE
} from '../types/generalTypes';

const generalEndpoint: string = "/general";

/**
 * Defining generalRequest action that takes a boolean as a parameter.
 */
export function generalRequest(newRequest: boolean) {
    return {
        type: GENERAL_REQUEST,
        payload: newRequest
    };
}

/**
 * Defining generalSuccess action that takes an array of objects as a parameter.
 */
export function generalSuccess(generalDatas: Object[]) {
    return {
        type: GENERAL_SUCCESS,
        payload: generalDatas
    };
}

/**
 * Defining generalFailure action that takes a boolean as a parameter.
 */
export function generalFailure(errorFound: boolean) {
    return {
        type: GENERAL_FAILURE,
        payload: errorFound
    };
}

/**
 * Fetching all the data from the general endpoint.
 */

function getGeneral() {
    return fetch(generalEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })

    .then(response => response.json(), error => { throw error });
}

export function loadGeneral() {
    return ((dispatch: any) => {
        dispatch(generalRequest(true));
        
        getGeneral()
        
        .then((data: any) => {
            dispatch(generalSuccess(data));
        })

        .catch((error: any) => {
            dispatch(generalFailure(true));
        });
    });
}





