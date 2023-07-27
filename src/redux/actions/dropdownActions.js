import {OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../constants/dropdownConstants";

export const openDropdown = () => (dispatch) => {

    dispatch({
        type: OPEN_DROPDOWN, 
    })

}

export const closeDropdown = () => (dispatch) => {
    dispatch({
        type: CLOSE_DROPDOWN, 
    })

}