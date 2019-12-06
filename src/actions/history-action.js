import $ from 'jquery';

export const UPDATE_HISTORY_API_REQUEST = 'history:updateHistory'
export const SHOW_HISTORY_API_REQUEST_ERROR = 'historyr:showErrorHistory'


export function updateHistory(newHistory) {
    console.log("history action updateHistory", newHistory)
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

export function historyApiRequest() {
    return dispatch => {
        console.log("history api request")
        $.ajax({
            url: 'https://api.spacexdata.com/v3/history',
            success(response) {
                console.log("SUCCESS", response)
                    // return response
                dispatch(updateHistory(response))
            },
            error() {
                console.log("ERROR")
                dispatch(showErrorHistory())
            }

        })
    }
}