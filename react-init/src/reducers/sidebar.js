import { GET_SIDEBAR_DATA } from '../actions/sidebar'

export default function getSideBarData(state = [], action) {
    switch (action.type) {
        case GET_SIDEBAR_DATA:
            return [...state, ...action.data]
        default:
            return state
    }
}