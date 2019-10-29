import { MenuActionTypes } from './menu.types';
import { menuSelectionHelper } from './menu.utils';

const INITIAL_STATE = {
    menuHidden: true,
    menuPopupShow: false,
    todoListShow: true,
    dailyListShow: true,
    weeklyListShow: true,
    monthlyListShow: true,
    menuSelection: {
        addGoal: false,
        removeGoal: false,
        addReward: false,
        removeReward: false

    },
    menuPopupResult: "",
    menuAccepted: false,
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
                menuPopupShow: !state.menuPopupShow,
                menuPopupResult: action.payload,
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
        case MenuActionTypes.MENU_SELECTION:
            return {
                ...state,
                menuSelection: menuSelectionHelper(action.payload, state.menuSelection),
                
            };
        case MenuActionTypes.MENU_ACCEPT:
            return {
                ...state,
                menuAccepted: action.payload,
            }
        default:
            return state;
    }
};

export default menuReducer;