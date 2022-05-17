import axios from 'axios';

export const add_category = (data) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/rest-api/add-category', data)

    } catch (error) {

    }
}