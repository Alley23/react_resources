import { combineReducers } from 'redux'
import getSideBarData from './sidebar'

const todoApp = combineReducers({
    getSideBarData,
})

export default todoApp