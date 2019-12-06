import $ from 'jquery';

export const UPDATE_HISTORY_API_REQUEST = 'history:updateHistory'
export const SHOW_HISTORY_API_REQUEST_ERROR = 'historyr:showErrorHistory'


export function updateHistory(newHistory) {
    console.log("history action updateHistory", newHistory)
    return {
        type: UPDATE_HISTORY_API_REQUEST,
        payload: {
            history: newHistory
        },
        // posts: newHistory.data.children.map(child => child.data),
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
        return fetch('https://api.spacexdata.com/v3/history')
            .then(response => response.json())
            .then(response => dispatch(updateHistory(response)))
            // .catch(err => dispatch(showErrorHistory()))
    }
}