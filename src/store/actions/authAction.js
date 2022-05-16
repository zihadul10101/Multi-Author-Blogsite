import axios from 'axios';
export const admin_login = (data) => async (dispatch) => {
  dispatch({
    type: 'LOADER_RUN',
  })
  try {
    // console.log('ok');
    const response = await axios.post('http://localhost:4000/rest-api/admin-login', data)
    localStorage.setItem('blog_token', response.data.token)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        successMessage: response.data.successMessage,
        token: response.data.token
      }
    })
  } catch (error) {
    dispatch({
      type: 'LOGIN_FILED',
      payload: {
        error: error.response.data.errorMessage
      }
    })

  }
}