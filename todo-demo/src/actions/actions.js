
//异步请求
// export const asynAdd = () => (dispatch) => {
// 	$.get("/mock/test.json", function(data){
// 		dispatch({"type" : "ASYNADD" , "data" : data});
// 	});
// }

// export const getApplyList = () => (dispatch) => {
// 	$.get("/mock/applyList.json", function (result) {
// 		dispatch({ "type": "GETAPPLYLIST", "data": result.data });
// 	});
// }


// export const getQuesTypes = () => (dispatch) => {
// 	$.get("/mock/quesTypes.json", function (result) {
// 		dispatch({ "type": "GETQUESTYPES", "data": result.data });
// 	});
// }

// export const getWorkList = () => (dispatch) => {
	
// 	$.get("/mock/workList.json", function (result) {
// 		console.log(result.data,"---------------");
// 		dispatch({ "type": "GETWORKLIST", "data": result.data });
// 	});
// }



// export const ok = () => ({ "type": "OK" });

// export const getItemData = (data) => ({ "type": "GETITEMDATA", data });

// export const getItemData = () => (dispatch) => {

// 	$.get("/mock/items.json", function (result) {
// 		console.log(result.data,"---------------");
//         dispatch({ "type": "GETITEMDATA", "data": result.data });
// 	});
// }

export const editChange = (id) => ({"type": "EDITCHANGE", id});
export const remove = (id) => ({"type": "REMOVEITEM", id});
export const addList = (data) => ({ "type": "ADDLIST", data });

export const endEdit = (data) => ({"type": "ENDEDIT", data});


