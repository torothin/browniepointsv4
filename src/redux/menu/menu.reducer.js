import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
    menuHidden: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU:
            return {
                ...state,
                menuHidden: !state.menuHidden
            };
        default:
            return state;
    }
};

export default menuReducer;