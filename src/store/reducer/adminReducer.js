const initialState={
    authenticated: false,
    userInfo:'',
    errorMessage:'',
    successMessage:'',
    loader: false
}
export const adminReducer =(state=initialState, action) =>{
const {payload,type} = action;

if(type === 'LOADER_RUN'){
    return{
        ...state,
        loader:true
    }
}

return state;
}