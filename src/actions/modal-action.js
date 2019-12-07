import ActionTypes from './action-types'

export const REVEAL_LAUNCH_MODAL = 'select_launch:revealLaunchModal'
export const MODAL_ERROR = 'select_launch:modalError'

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: ActionTypes.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: ActionTypes.HIDE_MODAL
    })
}

export function revealLaunchModal(revealLaunch) {
    return {
        type: REVEAL_LAUNCH_MODAL,
        payload: {
            select_launch: revealLaunch
        }
    }
}

export function modalError() {
    return {
        type: MODAL_ERROR,
        payload: {
            select_launch: 'ERROR!!'
        }
    }
}