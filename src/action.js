import axios from 'axios';

const fetchSuccess = (data) => {
    return {
        type: 'FETCH_SUCCESS',
        data: data
    };
}

const landSuccess = (data) => {
    return {
        type: 'LAND_SUCCESS',
        landSuccess: data
    };
}

const launchSuccess = (data) => {
    return {
        type: 'LAUNCH_SUCCESS',
        launchSuccess: data
    };
}

const launchYear = (data) => {
    return {
        type: 'LAUNCH_YEAR',
        launchYear: data
    };
}

const fetchStart = () => {
    return {
        type: 'FETCH_START'
    };
}

export const fetchItems = (url) => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get(url)
            .then(res => {
                dispatch(fetchSuccess(res.data));
            })
            .catch(err => console.log(err));
    }
}

export const onLandSuccess = (data) => {
    return landSuccess(data);
}
export const onLaunchSuccess = (data) => {
    return launchSuccess(data);
}
export const onLaunchYear = (data) => {
    return launchYear(data);
}


