import axios from 'axios';

export const GET_LIST_ITEM = 'GET_LIST_ITEM';
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_DONE = "CHANGE_DONE";
//数据请求
// export const getListItem = () => (dispatch) => {
//     axios.get("../mock/todo.json")
//         .then(res => {
//             console.log(res.data, "---------------");
//             dispatch({ 'type': GET_LIST_ITEM, 'data': res.data.data });
//         });
// }

//添加
// export const addItem = (value) => (dispatch) => {
//     console.log(value,"-----------------")
//     axios({
//         method: 'post',
//         url: '../mock/getTodo.json',
//         data: value
//     });
// }


//删除
// export const removeItem = (id) => (dispatch) => {
//     console.log(value,"-----------------")
//     axios({
//         method: 'post',
//         url: '../mock/getTodo.json',
//         data: id
//     });
// }

export const getListItemData = () => ({ 'type': GET_LIST_ITEM})
export const addItem = (value) => ({ 'type': ADD_ITEM, 'data': value })
export const removeItem = (id) => ({ 'type': REMOVE_ITEM, 'data': id })
export const changeDone = (data) => ({ 'type': CHANGE_DONE, 'data': data})


// export const getSideBarData = () => ({ "type": GET_NAV_LIST})
