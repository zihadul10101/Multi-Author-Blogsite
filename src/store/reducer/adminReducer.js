import jwt_decode from 'jwt-decode';

const initialState = {
    authenticated: false,
    userInfo: '',
    errorMessage: '',
    successMessage: '',
    loader: false
}
const DT = (token) => {
    const decodeToken = jwt_decode(token);
    console.log(decodeToken);
    const expiresTime = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresTime) {
        localStorage.removeItem('blog_token');
        return null
    } else {
        return decodeToken;
    }
}
const getToken = localStorage.getItem('blog_token');
if (getToken) {
    const decodeToken = DT(getToken);
    if (decodeToken) {
        initialState.userInfo = decodeToken
        initialState.authenticated = true;
    }
}
export const adminReducer = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === 'LOADER_RUN') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            loader: false,
            authenticated: true,
            errorMessage: '',
            userInfo: DT(payload.token),
            successMessage: payload.successMessage

        }
    }
    if (type === 'LOGIN_SUCCES_MESSAGE_CLEAR') {
        return {
            ...state,
            successMessage: ''
            
        }
    }
    if (type === 'LOGIN_FILED') {
        return {
            ...state,
            authenticated: false,
            userInfo: '',
            errorMessage: payload.error,
            successMessage: '',
            loader: false

        }
    }
    if (type === 'LOGIN_ERROR_CLEAR') {
        return {
            ...state,
            errorMessage: ''
        }
    }


    return state;
}