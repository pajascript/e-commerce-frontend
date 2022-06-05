import { useDispatch } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess, registerStart, registerFailure, registerSuccess, updateUserStart, updateUserFailure, updateUserSuccess  } from "./userRedux";

export const login = (dispatch, user) => {
    dispatch(loginStart());

        publicRequest.post("/auth/login", user)
            .then((res) => {
                dispatch(loginSuccess(res.data));
            }).catch(() => {
                dispatch(loginFailure());
            })
};

export const register = (dispatch, user) => {
    dispatch(registerStart());

        publicRequest.post("/auth/register", user)
            .then((res) => {
                dispatch(registerSuccess(res.data));
            }).catch(() => {
                dispatch(registerFailure());
            })
};

export const updateUser = async(id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};