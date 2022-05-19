const categoryState = {
loader:false,
categoryError:'',
categorySuccess:''
}

export const dashboradCategoryReducer = (state = categoryState, action) => {
const {type,payload} =action;
if (type === 'SET_LODER'){
    return {
        ...state,
        loader:true
    }
}
if (type === 'CATEGORY_ADD_SUCCESS'){
    return {
        ...state,
        loader:false,
        categorySuccess:payload.successMessage,
        categoryError:'',
    }
}
if (type === 'CATEGORY_SUCCESS_MESSAGE'){
    return {
        ...state,
        categorySuccess:'',
      
    }
}
if (type === 'CATEGORY_ERROR_MESSAGE'){
    return {
        ...state,
        categoryError:''
      
    }
}
if (type === 'CATEGORY_ADD_FAIL'){
    return {
        ...state,
        loader:false,
        categoryError:payload.error,
        categorySuccess:''
    }
}
return state;
}