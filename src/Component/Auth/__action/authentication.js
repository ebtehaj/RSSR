import axios from "axios";
import {api} from "../../../setup/api";
import {setStore} from "trim-redux";
import {toast} from "react-toastify";
import {signingOut} from "./signingOut";
import {tokenToHeaders} from "../../../setup/utility/tokenToHeaders";


/**
 * authentication
 * this method does two actions: validate the token and get the user details and set to redux.
 *
 * @param token <string>: user authentication key. like "eyJ0eXAiOiJKV1QiLCJhbGciOiJ...."
 * @returns {Promise<any>}: when user is valid, do then and when it is invalid, do catch
 */
export const authentication = (token) => {
    return axios({
        url: api.userDetails,
        token: tokenToHeaders({}, token)
    })
        .then((response) => {
            // token is valid and user details are ready to use
            setStore({
                localUser: {
                    updated: true,
                    token: token,
                    detail: response.data
                }
            });
        })
        .catch((e) => {
            // token is invalid or an error occured
            signingOut();
            toast.error('authentication error. please log in again.');
            console.error(e);
        });
}
