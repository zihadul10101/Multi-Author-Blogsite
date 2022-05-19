import axios from 'axios';

export const add_category = (data) => async (dispatch) => {

    dispatch({ type: 'SET_LODER' })
    try {
        const response = await axios.post('http://localhost:4000/rest-api/add-category', data, { withCredentials: true })
        dispatch({
            type: "CATEGORY_ADD_SUCCESS",
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type: "CATEGORY_ADD_FAIL",
            payload: {
                error: error.response.data.errorMessage
            }
        })
    }
}
export const get_all_category = (page, searchValue) => async (dispatch) => {
    try {
        // console.log(page);
        const response = await axios.get(`http://localhost:4000/rest-api/get-category?page=${page}&&searchValue=${searchValue}`,{ withCredentials: true })
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

