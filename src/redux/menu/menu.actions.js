import { MenuActionTypes } from './menu.types';

export const toggleMenuHidden = hidden => ({
    type: MenuActionTypes.TOGGLE_MENU,
    payload: hidden
});

export const toggleMenuPopupShow = show => ({
    type: MenuActionTypes.TOGGLE_MENU_POPUP,
    payload: show
});