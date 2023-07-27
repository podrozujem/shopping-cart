import {OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../constants/dropdownConstants";
const initialState = {
    isDropdownOpen: false, 
}

export const dropdownReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_DROPDOWN: 
            return{
                 ...state, 
                isDropdownOpen: true
            }
        case CLOSE_DROPDOWN:
            return{
                 ...state, 
                isDropdownOpen: false
            }
        default: 
            return state; 
    }


}