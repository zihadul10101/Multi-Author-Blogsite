const categoryState = {
    loader: false,
    categoryError: '',
    categorySuccess: '',
    allCategory: [],
    perPage: 0,
    categoryCount: 0,
    editCategory: '',
    editRequest: false
}

export const dashboradCategoryReducer = (state = categoryState, action) => {
    const { type, payload } = action;
    if (type === 'SET_LODER') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'CATEGORY_ADD_SUCCESS' || type === 'CATEGORY_DELETE_SUCCESS' || type === 'CATEGORY_UPDATED_SUCCESS') {
        return {
            ...state,
            loader: false,
            categorySuccess: payload.successMessage,
            categoryError: '',
        }
    }
    if (type === 'DASHBORAD_CATEGORY_GET_SUCCESS') {
        return {
            ...state,
            loader: false,
            allCategory: payload.allCategory,
            perPage: payload.perPage,
            categoryCount: payload.categoryCount
        }
    }
    if (type === 'EDIT_CATEGORY_GET_SUCCESS') {
        return {
            ...state,
            editCategory: payload.editCategory,
        }
    }
    if (type === 'EDIT_REQUEST_SET') {
        return {
            ...state,
            editRequest: true,
        }
    }
    if (type === 'CATEGORY_SUCCESS_MESSAGE') {
        return {
            ...state,
            categorySuccess: '',

        }
    }
    if (type === 'EDIT_REQUEST_CLEAR') {
        return {
            ...state,
            editRequest: false

        }
    }
    if (type === 'CATEGORY_ERROR_MESSAGE') {
        return {
            ...state,
            categoryError: ''

        }
    }
    if (type === 'CATEGORY_ADD_FAIL' || type === 'CATEGORY_UPDATED_FAIL') {
        return {
            ...state,
            loader: false,
            categoryError: payload.error,
            categorySuccess: ''
        }
    }

    return state;
}