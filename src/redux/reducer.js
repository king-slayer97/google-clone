const INITIAL_STATE = {
    term:null,
};

export const actionTypes = {
    SET_SEARCH_TERMS: "SET_SEARCH_TERMS",
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERMS:
            return({...state, term: action.value})
            
        default:
            return state;    
    }
}

export default reducer