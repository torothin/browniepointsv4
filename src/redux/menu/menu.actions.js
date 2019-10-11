import { MenuActionTypes } from './menu.types';

export const toggleMenuHidden = hidden => ({
    type: MenuActionTypes.TOGGLE_MENU,
    payload: hidden
});