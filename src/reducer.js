
const initialState = {
    data: [],
    launchYear: null,
    launchSuccess: null,
    landSuccess: null,
    loading: false
};

const fetchSuccess = (state, action) => {
    return {
        ...state,
        data: action.data,
        loading: false
    }
}

const landSuccess = (state, action) => {
    return {
        ...state,
        landSuccess: action.landSuccess
    }
}

const launchSuccess = (state, action) => {
    return {
        ...state,
        launchSuccess: action.launchSuccess
    }
}

const launchYear = (state, action) => {
    return {
        ...state,
        launchYear: action.launchYear
    }
}

const fetchStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_START':
            return fetchStart(state, action);
        case 'FETCH_SUCCESS':
            return fetchSuccess(state, action);
        case 'LAND_SUCCESS':
            return landSuccess(state, action);
        case 'LAUNCH_SUCCESS':
            return launchSuccess(state, action);
        case 'LAUNCH_YEAR':
            return launchYear(state, action);
        default:
            return state;
    }
}