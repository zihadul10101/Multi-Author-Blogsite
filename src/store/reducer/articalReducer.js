const initState = {
    loader: false,
    articalError: '',
    articalSuccess: '',
    allArticle: [],
    perPage: 0,
    articalCount: 0,
    editArtical: '',
    editRequest: false,
    allCategory: [],
    allTag: [],
}
export const articalReducer = (state = initState, action) => {

    const { payload, type } = action;
    if (type === 'CATE_TAG_GET_SUCCESS') {
        return {
            ...state,
            allCategory: payload.allCategory,
            allTag: payload.allTag
        }
    }
    if (type === 'ART_SET_LOADER') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'ARTICLE_ADD_SUCCESS') {
        return {
            ...state,
            loader: false,
            articalSuccess: payload.successMessage,
            articalError: '',
        }
    }
    if (type === 'ARTCLE_ADD_FAIL') {
        return {
            ...state,
            loader: false,
            articalError: payload.errorMessage,
            articalSuccess: ''
        }
    }
    if (type === 'ARTCLE_SUCCESS_MESSAGE_CLEAR') {
        return {
            ...state,
            articalSuccess: '',

        }
    }
    if (type === 'DASH_ARTICLE_GET_SUCCESS') {
        return {
            ...state,
            allArticle: payload.allArticle,
            parPage: payload.parPage,
            articleCount: payload.articleCount
        }
    }

    return state
}