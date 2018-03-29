import { combineReducers } from "redux";

const initState = [
    {
        "id": 1,
        "done": false,
        "text": "看我哦！我没有完成"
    },
    {
        "id": 2,
        "done": true,
        "text": "瞅啥，我已经完成了"
    }
]

function getItemData(state = initState, action) {
    switch (action.type) {
        case 'EDITCHANGE':
            return state.map((item, index) => {
                return item.id != action.id ? item : Object.assign(item, item.done = !item.done);
            })
        case 'ADDLIST':
            return [{"id": state.reduce((a, item) => {return item.id > a ? item.id : a }, -1) + 1,
                    "done": false,
                    "text": action.data},
                    ...state ]
        case 'REMOVEITEM':
            return state.filter((item) => {
                return item.id != action.id
            })
        case 'ENDEDIT':
            return state.map((item, index) => {
                return item.id != action.data.id ? item : Object.assign(item, action.data);
            })
    }
    return state;
}


export default combineReducers({
    getItemData //工单列表
});