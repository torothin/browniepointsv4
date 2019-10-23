import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
    menuHidden: true,
    menuPopupShow: false,
    todoListShow: true,
    dailyListShow: true,
    weeklyListShow: true,
    monthlyListShow: true,
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
        case MenuActionTypes.TOGGLE_TODO_LIST:
            return {
                ...state,
                todoListShow: !state.todoListShow
            };
        case MenuActionTypes.TOGGLE_DAILY_LIST:
            return {
                ...state,
                dailyListShow: !state.dailyListShow
            };
        case MenuActionTypes.TOGGLE_WEEKLY_LIST:
            return {
                ...state,
                weeklyListShow: !state.weeklyListShow
            };
        case MenuActionTypes.TOGGLE_MONTHLY_LIST:
            return {
                ...state,
                monthlyListShow: !state.monthlyListShow
            };
        default:
            return state;
    }
};

export default menuReducer;