import axios from 'axios'
export const get_tag_category = () => async (dispatch) => {

    try {

        const response = await axios.get('http://localhost:4000/rest-api/get-tag-category', { withCredentials: true });

        dispatch({
            type: 'CATE_TAG_GET_SUCCESS',
            payload: {
                allCategory: response.data.allCategory,
                allTag: response.data.allTag
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}