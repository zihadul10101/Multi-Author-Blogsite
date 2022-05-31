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
export const add_articale = (data)=>async(dispatch)=>{
    // console.log(data.get('title'))
    // dispatch({
    //     type : 'ART_SET_LOADER'
    // })
    try {
     
        const response = await axios.post('http://localhost:4000/rest-api/add-artical',data,{withCredentials:true});
        
        // dispatch({
        //     type : 'ARTICLE_ADD_SUCCESS',
        //     payload : {
        //         successMessage : response.data.successMessage
        //     }
        // })
      
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type : 'ARTCLE_ADD_FAIL',
        //     payload :{
        //         errorMessage :  error.response.data.errorMessage
        //     }
        // })
    }
}