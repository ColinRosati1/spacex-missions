import { REVEAL_LAUNCH_MODAL, MODAL_ERROR } from '../actions/modal-action'

export default function modalReducer(state = '', { type, payload }) {
    switch (type) {
        case REVEAL_LAUNCH_MODAL:
            return payload.select_launch;
        case MODAL_ERROR:
            return payload.select_launch;
        default:
            return state;
    }
}