import axios from 'axios';
export const admin_login = (data) => async (dispatch) => {
  dispatch({
    type: 'LOADER_RUN',
  })
  try {
    console.log('ok');
    const response = await axios.post('/rest-api/admin-login', data)
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
}