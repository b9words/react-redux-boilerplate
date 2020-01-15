import history from 'history.js';
import { SAMPLE_ACTION_TYPE } from 'redux/types';
import axios from 'axios';
import keys from 'config/keys';

function authorizedApiServer(userToken) {
  return axios.create({
    baseURL: `${keys.baseAPIURL}/api`,
    headers: { Authorization: userToken },
  });
}

export const actionName = (formValues) => async (dispatch, getState) => {
  const { userToken } = getState().auth;
  const formData = new FormData();
  formData.append('item', formValues.name);

  const response = await authorizedApiServer(userToken).post('/', formData);
  if (!response.data.error) {
    dispatch({ type: SAMPLE_ACTION_TYPE, payload: response.data });
  } else {
    // error
    dispatch({ type: SAMPLE_ACTION_TYPE, payload: response.data.error });
  }
  history.push('/');
};

export const actionName2 = () => async (dispatch) => {
  dispatch({ type: SAMPLE_ACTION_TYPE });
};
