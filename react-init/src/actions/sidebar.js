import axios from 'axios';

export const GET_SIDEBAR_DATA = 'GET_SIDEBAR_DATA';

export const getSideBarData = () => (dispatch) => {
    axios.get("../mock/nav-data.json")
        .then(res => {
            console.log(res.data, "---------------");
            dispatch({ "type": GET_SIDEBAR_DATA, "data": res.data.data });
        });

}

// export const getSideBarData = () => ({ "type": GET_NAV_LIST})
