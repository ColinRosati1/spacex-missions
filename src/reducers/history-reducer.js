import { UPDATE_HISTORY_API_REQUEST, SHOW_HISTORY_API_REQUEST_ERROR } from '../actions/history-action'

export default function historyReducer(state = '', { type, payload }) {
    switch (type) {
        case UPDATE_HISTORY_API_REQUEST:
            return payload.history;
        case SHOW_HISTORY_API_REQUEST_ERROR:
            return payload.history;
        default:
            return state;
    }
}