import axios from 'axios';
export const admin_login = (data) => async (dispatch) => {
  dispatch({
    type: 'LOADER_RUN',
  })
  try {
    // console.log('ok');
    const response = await axios.post('http://localhost:4000/rest-api/admin-login', data)
    console.log(response);
  } catch (error) {
    dispatch({
      type: 'LOGIN FILED',
      payload: {
        error: error.response.data.errorMessage
      }
    })

  }
}