import $ from 'jquery';

export const UPDATE_HISTORY_API_REQUEST = 'history:updateHistory'
export const SHOW_HISTORY_API_REQUEST_ERROR = 'historyr:showErrorHistory'


export function updateHistory(newHistory) {
    return {
        type: UPDATE_HISTORY_API_REQUEST,
        payload: {
            history: newHistory
        }
    }
}

export function showErrorHistory() {
    return {
        type: SHOW_HISTORY_API_REQUEST_ERROR,
        payload: {
            history: 'ERROR!!'
        }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: '',
            success(response) {
                console.log("SUCCESS", response)
                dispatch(updateHistory(response.newHistory))
            },
            error() {
                console.log("ERROR")
                dispatch(showErrorHistory())
            }

        })
    }
}