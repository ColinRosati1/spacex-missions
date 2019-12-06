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

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: '',
            success(response) {
                console.log("SUCCESS", response)
                dispatch(updateLaunch(response.newLaunch))
            },
            error() {
                console.log("ERROR")
                dispatch(showErrorLaunch())
            }

        })
    }
}