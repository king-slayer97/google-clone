const INITIAL_STATE = {
    term:null,
};

const actionTypes = {
    SET_SEARCH_TERMS: "SET_SEARCH_TERMS",
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERMS:
            return {...state, term: action.term}
            
            
    }
}