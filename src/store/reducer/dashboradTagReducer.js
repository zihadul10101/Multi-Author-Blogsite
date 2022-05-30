const tagState = {
    loader: false,
    tagError: '',
    tagSuccess: '',
    allTag: [],
    perPage: 0,
    tagCount: 0,
    editTag: '',
    editRequest: false
}

export const dashboradTagReducer = (state = tagState, action) => {
    const { type, payload } = action;
    if (type === 'SET_LODER') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'TAG_ADD_SUCCESS' || type === 'TAG_DELETE_SUCCESS' || type === 'TAG_UPDATED_SUCCESS') {
        return {
            ...state,
            loader: false,
            tagSuccess: payload.successMessage,
            tagError: '',
        }
    }
    if (type === 'DASHBORAD_TAG_GET_SUCCESS') {
        return {
            ...state,
            loader: false,
            allTag: payload.allTag,
            perPage: payload.perPage,
            tagCount: payload.tagCount
        }
    }
    if (type === 'EDIT_TAG_GET_SUCCESS') {
        return {
            ...state,
            editTag: payload.editTag,
        }
    }
    if (type === 'EDIT_REQUEST_SET') {
        return {
            ...state,
            editRequest: true,
        }
    }
    if (type === 'TAG_SUCCESS_MESSAGE') {
        return {
            ...state,
            tagSuccess: '',

        }
    }
    if (type === 'EDIT_REQUEST_CLEAR') {
        return {
            ...state,
            editRequest: false

        }
    }
    if (type === 'TAG_ERROR_MESSAGE') {
        return {
            ...state,
            tagError: ''

        }
    }
    if (type === 'TAG_ADD_FAIL' || type === 'TAG_UPDATED_FAIL') {
        return {
            ...state,
            loader: false,
            tagError: payload.error,
            tagSuccess: ''
        }
    }

    return state;
}