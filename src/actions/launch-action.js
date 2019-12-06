import $ from 'jquery';

export const UPDATE_LAUNCH_API_REQUEST_SUCCESS = 'launch:updateLaunch'
export const REVEAL_LAUNCH_MODAL = 'launch:revealLaunchModal'
export const SHOW_LAUNCH_API_REQUEST_ERROR = 'launch:showErrorLaunch'

export function updateLaunch(newLaunch) {
    return {
        type: UPDATE_LAUNCH_API_REQUEST_SUCCESS,
        payload: {
            launch: newLaunch
        }
    }
}

export function revealLaunchModal(revealLaunch) {
    return {
        type: REVEAL_LAUNCH_MODAL,
        payload: {
            launch: revealLaunch
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
        return fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(response => dispatch(updateLaunch(response)))
            .catch(err => {
                console.log("API ERROR")
                dispatch(showErrorLaunch())
            })
    }
}