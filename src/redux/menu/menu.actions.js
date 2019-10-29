import { MenuActionTypes } from './menu.types';

export const toggleMenuHidden = hidden => ({
    type: MenuActionTypes.TOGGLE_MENU,
    payload: hidden
});

export const toggleMenuPopupShow = show => ({
    type: MenuActionTypes.TOGGLE_MENU_POPUP,
    payload: show
});

export const menuSelection = selection => ({
    type: MenuActionTypes.MENU_SELECTION,
    payload: selection
});

export const toggleTodoList = toggle =>  ({
    type: MenuActionTypes.TOGGLE_TODO_LIST,
    payload: toggle
});

export const toggleDailyList = toggle =>  ({
    type: MenuActionTypes.TOGGLE_DAILY_LIST,
    payload: toggle
});

export const toggleWeeklyList = toggle =>  ({
    type: MenuActionTypes.TOGGLE_WEEKLY_LIST,
    payload: toggle
});

export const toggleMonthlyList = toggle =>  ({
    type: MenuActionTypes.TOGGLE_MONTHLY_LIST,
    payload: toggle
});

export const menuAccept = accepted =>  ({
    type: MenuActionTypes.MENU_ACCEPT,
    payload: accepted
});