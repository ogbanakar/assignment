import axios from "axios";
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
} from "../constants/userconstants";

export const getUser = (id) => async (dispatch) => {
    try {
        dispatch({ type:GET_USER_REQUEST });
        console.log(id);
        const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
        dispatch({
            type:GET_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
