export const UPDATE_LAUNCH_API_REQUEST_SUCCESS = 'launch:launchUpdate'
export const SHOW_LAUNCH_API_REQUEST_ERROR = 'launch:showErrorLaunch'

export function launchUpdate(newLaunch) {
    return {
        type: UPDATE_LAUNCH_API_REQUEST_SUCCESS,
        payload: {
            launch: newLaunch
        }
    }
}

export function showErrorLaunch() {
    return {
        type: SHOW_LAUNCH_API_REQUEST_ERROR,
        payload: {
            launch: 'ERROR!!'
        }
    }
}

export function LaunchApiRequest() {
    return dispatch => {
        return fetch('https://api.spacexdata.com/v3/launches', {
                accept: 'application/json',
                'Content-Length': '348'
            })
            .then(response => response.json())
            .then(response => dispatch(launchUpdate(response)))
            .catch(err => {
                console.log("API ERROR")
                dispatch(showErrorLaunch())
            })
    }
}