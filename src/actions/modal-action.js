export const REVEAL_LAUNCH_MODAL = 'select_launch:revealLaunchModal'
export const MODAL_ERROR = 'select_launch:modalError'

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