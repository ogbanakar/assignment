import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userconstants";

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true, users: [] };
      case USER_LIST_SUCCESS:
        return {
          loading: false,
          users: action.payload.data,
          pages: action.payload.total_pages,
          page: action.payload.page,
        };
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const getUserReducer = (
  state = {user: "Click on the button below to get the user details"},
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, user: null };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
