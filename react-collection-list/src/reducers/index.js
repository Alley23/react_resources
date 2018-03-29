import { combineReducers } from 'redux'
import getSideBarData from './sidebar'
import getListItem from './todo'

const todoApp = combineReducers({
    getSideBarData,
    getListItem,
})

export default todoApp