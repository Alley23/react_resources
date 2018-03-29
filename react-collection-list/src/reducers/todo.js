import { GET_LIST_ITEM, ADD_ITEM, REMOVE_ITEM, CHANGE_DONE} from '../actions/todo'
// 1---已做   2---未做
let initstate = [
    {
        "id": 1,
        "done": true,
        "text": "今天去吃什么？",
    },
    {
        "id": 2,
        "done": false,
        "text": "今天去吃什么？",
    },
    {
        "id": 3,
        "done": false,
        "text": "今天去吃什么？",
    }
]

export default function todoReduces(state = initstate, action) {
    switch (action.type) {
        case GET_LIST_ITEM:
            return [...state]
        case ADD_ITEM:
            return [{
                "id": state.reduce((a, item) => { return item.id > a ? item.id : a }, -1) + 1,
                "done": false,
                "text": action.data,
                "type": 1
            },
            ...state]
        case REMOVE_ITEM: 
            return state.filter((item) => {
                return item.id != action.data
            })
        case CHANGE_DONE:
            return state.map((item) => {
                return item.id != action.data.id ? item : Object.assign({},item, action.data);
            })
        default:
            return state
    }
}