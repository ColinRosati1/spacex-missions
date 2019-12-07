import { UPDATE_LAUNCH_API_REQUEST_SUCCESS, REVEAL_LAUNCH_MODAL, SHOW_LAUNCH_API_REQUEST_ERROR } from '../actions/launch-action'

export default function launchReducer(state = '', { type, payload }) {
    switch (type) {
        case UPDATE_LAUNCH_API_REQUEST_SUCCESS:
            return payload.launch;
        case REVEAL_LAUNCH_MODAL:
            return payload.select_launch;
        case SHOW_LAUNCH_API_REQUEST_ERROR:
            return payload.launch;
        default:
            return state;
    }
}