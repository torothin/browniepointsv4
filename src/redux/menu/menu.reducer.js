import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
    menuHidden: true,
    menuPopupShow: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU:
            return {
                ...state,
                menuHidden: !state.menuHidden
            };
        case MenuActionTypes.TOGGLE_MENU_POPUP:
                return {
                    ...state,
                    menuPopupShow: !state.menuPopupShow
                };
        default:
            return state;
    }
};

export default menuReducer;