import { getAccessToken, verifyAccessToken } from "../../dummyApi";
import { loginStart, loginSuccess, loginFailure } from "../userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const token = await getAccessToken(user);
    const isValidToken = await verifyAccessToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", user.email);
    dispatch(loginSuccess(user));
  } catch (err) {
    dispatch(loginFailure(err));
  }
}