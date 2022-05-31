const initState = {
    allCategory: [],
    allTag: []
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
    return state
}