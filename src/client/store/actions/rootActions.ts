/**
 * Importing action types.
 */
import { ROOT_REQUEST, ROOT_SUCCESS, ROOT_FAILURE } from "../types/rootTypes";

const rootEndpoint: string = "/root";

/**
 * Defining rootRequest action that takes a boolean as a parameter.
 */
export function rootRequest(newRequest: boolean) {
  return {
    type: ROOT_REQUEST,
    payload: newRequest
  };
}

/**
 * Defining rootSuccess action that takes an array of objects as a parameter.
 */
export function rootSuccess(rootDatas: Object[]) {
  return {
    type: ROOT_SUCCESS,
    payload: rootDatas
  };
}

/**
 * Defining rootFailure action that takes a boolean as a parameter.
 */
export function rootFailure(errorFound: boolean) {
  return {
    type: ROOT_FAILURE,
    payload: errorFound
  };
}

/**
 * Fetching all the data from the root endpoint.
 */
export async function getRoot() {
  try {
    const response = await fetch(rootEndpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    const json = await response.json();
    return json;
  } 
  
  catch (error) {
    throw error;
  }
}

/**
 * Defining the Redux Action that will load the root data
 * that will be displayed.
 */
export function loadRoot() {
  return async (dispatch: any) => {
    dispatch(rootRequest(true));

    await getRoot()
      .then((data: any) => {
        dispatch(rootSuccess(data));
      })

      .catch((error: any) => {
        console.log(error);
        dispatch(rootFailure(true));
      });
  };
}
